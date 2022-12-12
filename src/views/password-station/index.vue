<template>
  <CommonPage>
    <template v-if="!!secret" #action>
      <div f-c-c>
        <n-tooltip trigger="hover">
          当前口令： {{ secret }}
          <template #trigger>
            <n-button type="primary" secondary @click="initSecret"> 修改口令 </n-button>
          </template>
        </n-tooltip>
        <n-button ml-20 type="primary" @click="handleAdd">
          <TheIcon icon="material-symbols:add" :size="18" class="mr-5" /> 添加密码
        </n-button>
      </div>
    </template>

    <CrudTable
      ref="$table"
      v-model:query-items="queryItems"
      :scroll-x="1200"
      :columns="columns"
      :get-data="api.getPasswords"
      :extra-params="extraParams"
    >
      <template #queryBar>
        <QueryBarItem label="标题" :label-width="50">
          <n-input
            v-model:value="queryItems.title"
            type="text"
            placeholder="请输入标题"
            @keydown.enter="$table?.handleSearch"
          />
        </QueryBarItem>
        <QueryBarItem label="用户名" :label-width="50">
          <n-input
            v-model:value="queryItems.userName"
            type="text"
            placeholder="请输入用户名"
            @keydown.enter="$table?.handleSearch"
          />
        </QueryBarItem>
      </template>
    </CrudTable>

    <!-- 新增/编辑/查看 -->
    <CrudModal
      v-model:visible="modalVisible"
      :title="modalTitle"
      :loading="modalLoading"
      :show-footer="modalAction !== 'view'"
      @on-save="handleSave"
    >
      <n-form
        ref="modalFormRef"
        label-placement="left"
        label-align="left"
        :label-width="80"
        :model="modalForm"
        :disabled="modalAction === 'view'"
      >
        <n-form-item
          label="用户名"
          path="userName"
          :rule="{
            required: true,
            message: '请输入',
            trigger: ['input', 'blur'],
          }"
        >
          <n-input v-model:value="modalForm.userName" placeholder="请输入" />
        </n-form-item>
        <n-form-item
          label="密码"
          path="pwd"
          :rule="{
            required: true,
            message: '请输入',
            trigger: ['input', 'blur'],
          }"
        >
          <n-input v-model:value="modalForm.pwd" type="password" show-password-on="click" placeholder="请输入" />
        </n-form-item>
      </n-form>
    </CrudModal>
  </CommonPage>
</template>

<script setup>
import { NInput, NButton } from 'naive-ui'
import { renderIcon } from '@/utils'

import { useCRUD } from '@/composables'

import api from './api'

const secret = ref('')
const inputSecret = ref('')

initSecret()
function initSecret() {
  $dialog.info({
    title: '请输入口令',
    content: () => {
      return h(NInput, {
        size: 'large',
        style: { margin: '20px 0' },
        onUpdateValue: (v) => (inputSecret.value = v),
      })
    },
    positiveText: '确定',
    maskClosable: false,
    closable: false,
    closeOnEsc: false,
    onPositiveClick: () => {
      if (!inputSecret.value) return false
      secret.value = inputSecret.value
      inputSecret.value = ''
    },
  })
}

const $table = ref(null)
/** QueryBar筛选参数（可选） */
const queryItems = ref({})
/** 补充参数（可选） */
const extraParams = ref({})
watch(secret, () => {
  $table.value?.handleSearch()
})

const columns = [
  { title: '标题', key: 'title', ellipsis: { tooltip: true } },
  { title: '用户名', key: 'userName', ellipsis: { tooltip: true } },
  { title: '密码', key: 'pwd', ellipsis: { tooltip: true } },
  { title: '网站', key: 'link', ellipsis: { tooltip: true } },
  { title: '备注', key: 'remark', ellipsis: { tooltip: true } },
  {
    title: '操作',
    key: 'actions',
    width: 300,
    align: 'center',
    fixed: 'right',
    render(row) {
      return [
        h(
          NButton,
          {
            size: 'small',
            type: 'primary',
            secondary: true,
            onClick: () => handleView(row),
          },
          { default: () => '查看', icon: renderIcon('majesticons:eye-line', { size: 14 }) }
        ),
        h(
          NButton,
          {
            size: 'small',
            type: 'primary',
            style: 'margin-left: 15px;',
            onClick: () => handleEdit(row),
          },
          { default: () => '编辑', icon: renderIcon('material-symbols:edit-outline', { size: 14 }) }
        ),

        h(
          NButton,
          {
            size: 'small',
            type: 'error',
            style: 'margin-left: 15px;',
            onClick: () => handleDelete(row.id),
          },
          { default: () => '删除', icon: renderIcon('material-symbols:delete-outline', { size: 14 }) }
        ),
      ]
    },
  },
]

const {
  modalVisible,
  modalAction,
  modalTitle,
  modalLoading,
  handleAdd,
  handleDelete,
  handleEdit,
  handleView,
  handleSave,
  modalForm,
  modalFormRef,
} = useCRUD({
  name: '文章',
  initForm: { author: '大脸怪' },
  doCreate: api.addPost,
  doDelete: api.deletePost,
  doUpdate: api.updatePost,
  refresh: () => $table.value?.handleSearch(),
})
</script>
