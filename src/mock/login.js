const Mock = require('mockjs')


const tokens = {
    admin: {
        token: 'admin-token'
    },
    editor: {
        token: 'editor-token'
    }
}

const users = {
    'admin-token': {
        roles: 'admin',
        introduction: 'I am a super administrator',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin'
    },
    'editor-token': {
        roles: 'editor',
        introduction: 'I am an editor',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Normal Editor'
    }
}
//mock第三个参数可以直接返回数据结构，也可以返回一个函数
Mock.mock("api/test", 'get', {
    status: 200,
    message: '请求成功',
    "result|2-8": [{
        id:'@natural(2,10)',
        UUId: '@guid()',
        nickName: '@cword(2,6)',//文字
        headPic:'@dataImage(80x80)',//图片base64
    }]
})

//根据用户账号获取对应角色的token
Mock.mock("/api/getToken", 'get', function (option) {
    //option是接口传过来的参数
    if (JSON.parse(option.body).username == 'admin') {
        return {
            status: 200,
            message: '请求成功',
            result: {
                token: tokens.admin.token
            }
        }
    }
    if (JSON.parse(option.body).username == 'editor') {
        return {
            status: 200,
            message: '请求成功',
            result: {
                token: tokens.editor.token
            }
        }
    }
    return {
        status: 400,
        message: '监测无此账号',
    }
    
})
//根据用户token获取用户不同角色 这里必须把token传过来
Mock.mock("/api/getUserInfo", 'post', function (option) {
    if (JSON.parse(option.body).token == 'admin-token') {
        return users[JSON.parse(option.body).token]
    } else {
        return users[JSON.parse(option.body).token]
    }
})
