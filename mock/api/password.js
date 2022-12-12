const passwords = [
  {
    title: 'github',
    userName: 'xxx1',
    pwd: '***',
    remark: '',
    link: '',
  },
  {
    title: 'gitee',
    userName: 'xxx2',
    pwd: '***',
    remark: '',
    link: '',
  },
  {
    title: 'juejin',
    userName: 'xxx3',
    pwd: '***',
    remark: '',
    link: '',
  },
  {
    title: 'oa',
    userName: 'xxx4',
    pwd: '***',
    remark: '',
    link: 'https://www.qszone.com',
  },
]

export default [
  {
    url: '/api/passwords',
    method: 'get',
    response: (data = {}) => {
      const { title, userName, pageNo, pageSize } = data.query
      let pageData = []
      let total = 60
      const filterData = passwords.filter(
        (item) =>
          (item.title.includes(title) || (!title && title !== 0)) &&
          (item.userName.includes(userName) || (!userName && userName !== 0))
      )

      if (filterData.length) {
        if (pageSize) {
          while (pageData.length < pageSize) {
            pageData.push(filterData[Math.round(Math.random() * (filterData.length - 1))])
          }
        } else {
          pageData = filterData
        }
        pageData = pageData.map((item, index) => ({
          id: pageSize * (pageNo - 1) + index + 1,
          ...item,
        }))
      } else {
        total = 0
      }
      return {
        code: 0,
        message: 'ok',
        data: {
          pageData,
          total,
          pageNo,
          pageSize,
        },
      }
    },
  },
  {
    url: '/api/password',
    method: 'post',
    response: ({ body }) => {
      return {
        code: 0,
        message: 'ok',
        data: body,
      }
    },
  },
  {
    url: '/api/password/:id',
    method: 'put',
    response: ({ query, body }) => {
      return {
        code: 0,
        message: 'ok',
        data: {
          id: query.id,
          body,
        },
      }
    },
  },
  {
    url: '/api/password/:id',
    method: 'delete',
    response: ({ query }) => {
      return {
        code: 0,
        message: 'ok',
        data: {
          id: query.id,
        },
      }
    },
  },
]
