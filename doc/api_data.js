define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "/Users/small_ant/Desktop/code/WechatGames/doc/main.js",
    "groupTitle": "/Users/small_ant/Desktop/code/WechatGames/doc/main.js",
    "name": ""
  },
  {
    "type": "GET",
    "url": "/data/advertising/",
    "title": "广告获取",
    "version": "0.0.1",
    "description": "<p>获取广告接口</p>",
    "name": "广告获取",
    "group": "DATA",
    "filename": "./games/views.py",
    "groupTitle": "DATA"
  },
  {
    "type": "GET",
    "url": "/gameStart/",
    "title": "启动参数",
    "version": "0.0.1",
    "description": "<p>游戏启动信息</p>",
    "name": "广告获取",
    "group": "DATA",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>小游戏名字 获取单个小游戏的配置</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{\n    \"name\":\"ml\",\n}",
        "type": "json"
      }
    ],
    "filename": "./web/views.py",
    "groupTitle": "DATA"
  },
  {
    "type": "GET",
    "url": "/data/app/",
    "title": "游戏配置信息",
    "version": "0.0.1",
    "description": "<p>可通过加id来获取单个活动</p>",
    "name": "获取全部游戏配置",
    "group": "DATA",
    "filename": "./user/views.py",
    "groupTitle": "DATA"
  },
  {
    "type": "GET",
    "url": "/data/user/",
    "title": "用户信息",
    "version": "0.0.1",
    "description": "<p>可通过加id来获取单个活动</p>",
    "name": "获取全部用户信息",
    "group": "DATA",
    "filename": "./user/views.py",
    "groupTitle": "DATA"
  },
  {
    "type": "POST",
    "url": "/api/get_voice/",
    "title": "生成音频数据接口-已弃用此接口",
    "version": "0.0.1",
    "name": "文字转音频",
    "group": "Delete",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jwt验证秘钥必须添加次内容请求</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>文件名字 参数可选</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>文本内容 参数必须</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "human",
            "description": "<p>说话人 参数可选 说话人参数0成年女人,1成年男人,101015,男孩,101016,女孩</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>请求状态1,成功,0失败</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "mes",
            "description": "<p>信息提示</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    'status': 0,\n    \"mes\": \"没有必须参数text\"\n}\n'没有传递要修改的参数，也需要携带token否则就是post的错误提示'",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "voice_url",
            "description": "<p>音频文件url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    'status': 1,\n    \"voice_url\":\"static/voice/talk.mp3\"\n}\n'更新后的内容'",
          "type": "json"
        }
      ]
    },
    "filename": "./voice/views.py",
    "groupTitle": "Delete"
  },
  {
    "type": "POST",
    "url": "/api/wx_auth/",
    "title": "发起微信授权接口",
    "version": "0.0.1",
    "name": "微信授权",
    "group": "GAME",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jwt验证秘钥必须添加次内容请求</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "openid",
            "description": "<p>wx_login 的返回值</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "iv",
            "description": "<p>解密参数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "encrypteData",
            "description": "<p>解密参数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "session_key",
            "description": "<p>wx_login 返回参数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>游戏名字</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>状态码，请求是否成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mes",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "user",
            "description": "<p>授权后的用户信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 1,\n    \"mes\": \"授权成功\",\n    \"user\": {\n        \"last_login\": \"2020-08-21T19:10:14.515026\",\n        \"avatar_url\": null,\n        \"nick_name\": \"small_ant\",\n        \"gender\": null,\n        \"city\": null,\n        \"province\": null,\n        \"country\": null,\n        \"login\": \"2020-08-24T13:28:38.468543\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./user/views.py",
    "groupTitle": "GAME"
  },
  {
    "type": "POST",
    "url": "/api/wx_login/",
    "title": "微信登录接口",
    "version": "0.0.1",
    "description": "<p>通过微信登录,获取秘钥</p>",
    "name": "微信登录",
    "group": "GAME",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>小游戏名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>请求码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jwt",
            "description": "<p>认证秘钥,获取游戏信息需要此秘钥</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "user",
            "description": "<p>用户信息,openid,session_key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 1,\n    \"jwt\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk4MzMzMzE4LCJqdGkiOiIzNTMwMTZjOWZlODg0NjMyYjI2MjZjMDc2NTZiMTg0OCIsInVzZXJfaWQiOjJ9.w4Jbv93fWhxHK2rg1bTN9lTc-s3OpltJVL7ROgV8gms\",\n    \"user\": {\n        \"openid\": \"oXzWY5EGlH7IypN0W8Y7mQ0QeedI\",\n        \"session_key\": \"OouXbl87Nv0495rSCp+jLg==\"\n    }\n}\n如果用户已经授权\n{\n    \"status\": 1,\n    \"jwt\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk4MzMzODQwLCJqdGkiOiJlZTVmYzI4ZWQ2YTc0MTU3OWQ1ODU5NTk4MTZhZDE4ZCIsInVzZXJfaWQiOjJ9.oFNCpzwbdwtI3sJlZRFw_oK1dLwopTpvX2gCkCzv7WM\",\n    \"user\": {\n        \"id\": 2,\n        \"last_login\": \"2020-08-24T13:28:38.468543\",\n        \"avatar_url\": null,\n        \"nick_name\": \"small_ant\",\n        \"gender\": null,\n        \"city\": null,\n        \"province\": null,\n        \"country\": null,\n        \"login\": \"2020-08-24T13:37:20.455855\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>请求状态1,成功,0失败</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "mes",
            "description": "<p>信息提示</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 204 Error\n{\n    'status': 0,\n    'mes':'code 失效'\n}\n'解决办法：重新生成code请求'",
          "type": "json"
        }
      ]
    },
    "filename": "./user/views.py",
    "groupTitle": "GAME"
  },
  {
    "type": "GET",
    "url": "/make_voice/",
    "title": "生成音频数据接口-更新为不需要jwt认证接口",
    "version": "0.0.1",
    "name": "文字转音频",
    "group": "GAME",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>文件标签 参数必须,标签必须为唯一</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>文本内容 参数必须</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "human",
            "description": "<p>说话人 参数可选 说话人参数0成年女人,1成年男人,101015,男孩,101016,女孩,针对不同游戏可能使用不同的声音来进行区分,默认为小女孩，通常不加此参数</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>请求状态1,成功,0失败</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "mes",
            "description": "<p>信息提示</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    'status': 0,\n    \"mes\": \"没有必须参数text\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "voice_url",
            "description": "<p>音频文件url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    'status': 1,\n    \"voice_url\":\"static/voice/talk.mp3\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./web/views.py",
    "groupTitle": "GAME"
  },
  {
    "type": "PUT",
    "url": "/api/gameInfo/",
    "title": "更新游戏内容接口",
    "version": "0.0.1",
    "name": "更新用户游戏信息",
    "group": "GAME",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jwt验证秘钥必须添加此内容请求</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>小游戏名字,区分该用户玩过多款小游戏</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameInfo_value",
            "description": "<p>更新哪个内容就传递什么参数和值,可以传递一个或多个</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "{\n    \"name\":\"ml\",\n    \"ortherInfo\":\"bbbbb\",\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gameInfo-grade",
            "description": "<p>等级</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gameInfo-score",
            "description": "<p>得分</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gameInfo-level",
            "description": "<p>解锁关卡，玩到第几关</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gameInfo-property",
            "description": "<p>金币,钻石等资源</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "is_subscription",
            "description": "<p>是否订阅</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gameInfo-ortherInfo",
            "description": "<p>其它信息，json转字符串存储，获取后可转回json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    'status': 1,\n    \"gameInfo\": {\n        \"grade\": \"1\",\n        \"score\": \"0\",\n        \"level\": \"1\",\n        \"property\": \"0\",\n        \"ortherInfo\":\"\"\n    }\n}\n'更新后的内容'",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "mes",
            "description": "<p>错误提示</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>请求状态1,成功,0失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    'status': 0,\n    \"mes\": \"没有更改信息\"\n}\n'没有传递要修改的参数，也需要携带token否则就是post的错误提示'",
          "type": "json"
        }
      ]
    },
    "filename": "./games/views.py",
    "groupTitle": "GAME"
  },
  {
    "type": "POST",
    "url": "/api/sign/",
    "title": "签到接口",
    "version": "0.0.1",
    "name": "游戏签到",
    "group": "GAME",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jwt验证秘钥必须添加次内容请求</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>游戏名字，参数必须</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>请求状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>list 签到时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    'status': 1,\n    \"mes\": \"ok,今日签到成功！\",\n    \"time\": [\n        {\n            \"date\": \"2020-08-06T17:15:42.109339\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>请求状态,请求状态为0表示签到失败，请求状态为1表示签到成功</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "mes",
            "description": "<p>信息提示</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"mes\": \"error,今日签到已完成！\",\n    'mes': 'error, 七日签到完成,\n\n}\n'需要携带token否则就是post的错误提示'",
          "type": "json"
        }
      ]
    },
    "filename": "./games/views.py",
    "groupTitle": "GAME"
  },
  {
    "type": "POST",
    "url": "/api/rank/",
    "title": "获取排行",
    "version": "0.0.1",
    "name": "获取排行",
    "group": "GAME",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jwt验证秘钥必须添加次内容请求</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>游戏名字，参数必须</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cod",
            "description": "<p>排序字段，参数必须</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "As_ds",
            "description": "<p>正序或反序 参数可选默认正序 as 为正序，ds反序</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "num",
            "description": "<p>获取数据条数,参数可选，默认100</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>请求状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mes",
            "description": "<p>信息提示</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "info",
            "description": "<p>list 返回排序数据 角色信息和用户头像、昵称等</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 1,\n    \"mes\": \"排序数据\",\n    \"info\": [\n        {\n            \"grade\": \"1\",\n            \"score\": \"0\",\n            \"level\": \"1\",\n            \"property\": \"0\",\n            \"avatar_url\": \"https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eq4O1ybHBEFxs6IOq3gpDBUJIs6CCh3Dzdticd7Gg6vciafribkhDuria8sP7ytjwBX62IZbIyNxZfHgg/132\",\n            \"nick_name\": \"small ant\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>请求状态</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "mes",
            "description": "<p>信息提示</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"status\": 0,\n    \"mes\": \"不能依据此字段排序\",\n    \"info\": null\n}\n\n'需要携带token否则就是post的错误提示'",
          "type": "json"
        }
      ]
    },
    "filename": "./games/views.py",
    "groupTitle": "GAME"
  },
  {
    "type": "POST",
    "url": "/api/gameInfo/",
    "title": "获取游戏内容接口",
    "version": "0.0.1",
    "name": "获取游戏配置信息",
    "group": "GAME",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jwt验证秘钥必须添加次内容请求</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>小游戏名字,区分该用户玩过多款小游戏</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gameInfo-grade",
            "description": "<p>等级</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gameInfo-score",
            "description": "<p>得分</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gameInfo-level",
            "description": "<p>解锁关卡，玩到第几关</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gameInfo-property",
            "description": "<p>金币,钻石等资源</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gameInfo-ortherInfo",
            "description": "<p>其它信息，json转字符串存储，获取后可转回json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    'status': 1,\n    \"gameInfo\": {\n        \"grade\": \"1\",\n        \"score\": \"0\",\n        \"level\": \"1\",\n        \"property\": \"0\",\n        \"ortherInfo\":\"\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>token 错误,或者没有携带</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"detail\": \"Given token not valid for any token type\",\n    \"code\": \"token_not_valid\",\n    \"messages\": [\n        {\n            \"token_class\": \"AccessToken\",\n            \"token_type\": \"access\",\n            \"message\": \"Token is invalid or expired\"\n        }\n    ]\n}\n'请求需要携带token '",
          "type": "json"
        }
      ]
    },
    "filename": "./games/views.py",
    "groupTitle": "GAME"
  },
  {
    "type": "GET",
    "url": "/api/address/",
    "title": "修改收货地址",
    "version": "0.0.1",
    "description": "<p>用户修改收货地址</p>",
    "name": "修改收货地址",
    "group": "小程序",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jwt验证秘钥必须添加此内容请求</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>请求状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mes",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": "<p>用户修改的收货地址</p>"
          }
        ]
      }
    },
    "filename": "./mini/views.py",
    "groupTitle": "小程序"
  },
  {
    "type": "POST",
    "url": "/api/order/",
    "title": "修改订单",
    "version": "0.0.1",
    "description": "<p>修改订单状态</p>",
    "name": "修改订单",
    "group": "小程序",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jwt验证秘钥必须添加此内容请求</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>订单选项,开通给用户付款，删除功能</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pay",
            "description": "<p>付款状态,0,1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "delete",
            "description": "<p>删除状态,0,1</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>请求状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mes",
            "description": "<p>提示信息</p>"
          }
        ]
      }
    },
    "filename": "./mini/views.py",
    "groupTitle": "小程序"
  },
  {
    "type": "POST",
    "url": "/api/order/",
    "title": "创建订单",
    "version": "0.0.1",
    "description": "<p>购物车创建订单</p>",
    "name": "创建订单",
    "group": "小程序",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jwt验证秘钥必须添加此内容请求</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "catId",
            "description": "<p>购物车内容,逗号分隔id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>订单备注</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>请求状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mes",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": "<p>订单详情</p>"
          }
        ]
      }
    },
    "filename": "./mini/views.py",
    "groupTitle": "小程序"
  },
  {
    "type": "PUT",
    "url": "/api/cat/",
    "title": "删除购物车",
    "version": "0.0.1",
    "description": "<p>用户删除购物车信息</p>",
    "name": "删除购物车",
    "group": "小程序",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jwt验证秘钥必须添加此内容请求</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>购物车id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>请求状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mes",
            "description": "<p>提示信息</p>"
          }
        ]
      }
    },
    "filename": "./mini/views.py",
    "groupTitle": "小程序"
  },
  {
    "type": "GET",
    "url": "/api/address/",
    "title": "新建收货地址",
    "version": "0.0.1",
    "description": "<p>用户新建收货地址</p>",
    "name": "新建收货地址",
    "group": "小程序",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jwt验证秘钥必须添加此内容请求</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>请求状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mes",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": "<p>用户新建的收货地址</p>"
          }
        ]
      }
    },
    "filename": "./mini/views.py",
    "groupTitle": "小程序"
  },
  {
    "type": "POST",
    "url": "/api/cat/",
    "title": "添加购物车",
    "version": "0.0.1",
    "description": "<p>用户添加购物车</p>",
    "name": "添加购物车",
    "group": "小程序",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jwt验证秘钥必须添加此内容请求</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>商品id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "num",
            "description": "<p>商品数量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>请求状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mes",
            "description": "<p>提示信息</p>"
          }
        ]
      }
    },
    "filename": "./mini/views.py",
    "groupTitle": "小程序"
  },
  {
    "type": "GET",
    "url": "/data/activity/",
    "title": "商品信息",
    "version": "0.0.1",
    "description": "<p>可通过加id来获取单个商品</p>",
    "name": "获取全部商品",
    "group": "小程序",
    "filename": "./mini/views.py",
    "groupTitle": "小程序"
  },
  {
    "type": "GET",
    "url": "/data/activity/",
    "title": "活动信息",
    "version": "0.0.1",
    "description": "<p>可通过加id来获取单个活动</p>",
    "name": "获取全部活动",
    "group": "小程序",
    "filename": "./mini/views.py",
    "groupTitle": "小程序"
  },
  {
    "type": "GET",
    "url": "/api/productImg/",
    "title": "商品图片信息",
    "version": "0.0.1",
    "description": "<p>获取该商品图片信息</p>",
    "name": "获取商品图片",
    "group": "小程序",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jwt验证秘钥必须添加此内容请求</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>商品id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>请求状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mes",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": "<p>该商品的所有图片属性等级不为0的信息</p>"
          }
        ]
      }
    },
    "filename": "./mini/views.py",
    "groupTitle": "小程序"
  },
  {
    "type": "GET",
    "url": "/api/games/",
    "title": "授权信息",
    "version": "0.0.1",
    "description": "<p>获取授权用户的游戏之间关联</p>",
    "name": "获取授权信息",
    "group": "小程序",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>小程序名字</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>请求状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mes",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": "<p>该用户在此平台授权的所有游戏数据，包括红包信息等等</p>"
          }
        ]
      }
    },
    "filename": "./mini/views.py",
    "groupTitle": "小程序"
  },
  {
    "type": "GET",
    "url": "/api/address/",
    "title": "获取收货地址",
    "version": "0.0.1",
    "description": "<p>获取用户收货地址</p>",
    "name": "获取收货地址",
    "group": "小程序",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jwt验证秘钥必须添加此内容请求</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>请求状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mes",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": "<p>用户的收货地址</p>"
          }
        ]
      }
    },
    "filename": "./mini/views.py",
    "groupTitle": "小程序"
  },
  {
    "type": "POST",
    "url": "/api/order/",
    "title": "获取订单",
    "version": "0.0.1",
    "description": "<p>获取全部订单</p>",
    "name": "获取订单信息",
    "group": "小程序",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jwt验证秘钥必须添加此内容请求</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>请求状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mes",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": "<p>订单详情</p>"
          }
        ]
      }
    },
    "filename": "./mini/views.py",
    "groupTitle": "小程序"
  },
  {
    "type": "GET",
    "url": "/api/cat/",
    "title": "获取购物车",
    "version": "0.0.1",
    "description": "<p>获取用户添加购物车内容</p>",
    "name": "获取购物车",
    "group": "小程序",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jwt验证秘钥必须添加此内容请求</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>请求状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mes",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": "<p>购物车中的商品信息</p>"
          }
        ]
      }
    },
    "filename": "./mini/views.py",
    "groupTitle": "小程序"
  },
  {
    "type": "POST",
    "url": "/api/diray/",
    "title": "上传日记",
    "version": "0.0.1",
    "name": "上传日记",
    "group": "萌上日记",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jwt验证秘钥必须添加次内容请求</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>游戏名字</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>日记标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>日记内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "weather",
            "description": "<p>天气 ,可以为空</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mood",
            "description": "<p>心情,可以为空</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "public",
            "description": "<p>是否公开</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "status",
            "description": "<p>日记状态</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>token 错误,或者没有携带</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"detail\": \"Given token not valid for any token type\",\n    \"code\": \"token_not_valid\",\n    \"messages\": [\n        {\n            \"token_class\": \"AccessToken\",\n            \"token_type\": \"access\",\n            \"message\": \"Token is invalid or expired\"\n        }\n    ]\n}\n'请求需要携带token '",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 1,\n  \"mes\": \"日记新建成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./games/views.py",
    "groupTitle": "萌上日记"
  },
  {
    "type": "PUT",
    "url": "/api/mailbox/",
    "title": "修改一条信箱",
    "version": "0.0.1",
    "name": "修改一条信箱",
    "group": "萌上日记",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jwt验证秘钥必须添加次内容请求</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>信箱信息id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "favor",
            "description": "<p>是否收藏</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>是否删除</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>token 错误,或者没有携带</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"detail\": \"Given token not valid for any token type\",\n    \"code\": \"token_not_valid\",\n    \"messages\": [\n        {\n            \"token_class\": \"AccessToken\",\n            \"token_type\": \"access\",\n            \"message\": \"Token is invalid or expired\"\n        }\n    ]\n}\n'请求需要携带token '",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nHTTP/1.1 200 OK\n{\n  \"status\": 1,\n  \"mes\": \"修改信箱\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./games/views.py",
    "groupTitle": "萌上日记"
  },
  {
    "type": "PUT",
    "url": "/api/diray/",
    "title": "修改日记",
    "version": "0.0.1",
    "name": "修改日记",
    "group": "萌上日记",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jwt验证秘钥必须添加次内容请求</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>日记id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "weather",
            "description": "<p>天气 ,可以为空</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mood",
            "description": "<p>心情,可以为空</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "public",
            "description": "<p>是否公开</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "status",
            "description": "<p>日记状态</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>token 错误,或者没有携带</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"detail\": \"Given token not valid for any token type\",\n    \"code\": \"token_not_valid\",\n    \"messages\": [\n        {\n            \"token_class\": \"AccessToken\",\n            \"token_type\": \"access\",\n            \"message\": \"Token is invalid or expired\"\n        }\n    ]\n}\n'请求需要携带token '",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 1,\n  \"mes\": \"日记修改完成\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./games/views.py",
    "groupTitle": "萌上日记"
  },
  {
    "type": "POST",
    "url": "/api/dirayImage/",
    "title": "日记加图片",
    "version": "0.0.1",
    "name": "日记加图片",
    "group": "萌上日记",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jwt验证秘钥必须添加次内容请求</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>日记id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>图片内容</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>token 错误,或者没有携带</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"detail\": \"Given token not valid for any token type\",\n    \"code\": \"token_not_valid\",\n    \"messages\": [\n        {\n            \"token_class\": \"AccessToken\",\n            \"token_type\": \"access\",\n            \"message\": \"Token is invalid or expired\"\n        }\n    ]\n}\n'请求需要携带token '",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nHTTP/1.1 200 OK\n{\n  \"status\": 1,\n  \"mes\": \"上传图片\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./games/views.py",
    "groupTitle": "萌上日记"
  },
  {
    "type": "POST",
    "url": "/api/mailbox/",
    "title": "获取一条信箱",
    "version": "0.0.1",
    "name": "获取一条到信箱",
    "group": "萌上日记",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jwt验证秘钥必须添加次内容请求</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>游戏名字</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>token 错误,或者没有携带</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"detail\": \"Given token not valid for any token type\",\n    \"code\": \"token_not_valid\",\n    \"messages\": [\n        {\n            \"token_class\": \"AccessToken\",\n            \"token_type\": \"access\",\n            \"message\": \"Token is invalid or expired\"\n        }\n    ]\n}\n'请求需要携带token '",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 1,\n  \"mes\": \"新增一条信箱\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./games/views.py",
    "groupTitle": "萌上日记"
  },
  {
    "type": "GET",
    "url": "/api/mailbox/",
    "title": "获取信箱",
    "version": "0.0.1",
    "name": "获取信箱",
    "group": "萌上日记",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jwt验证秘钥必须添加次内容请求</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>游戏名字</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>token 错误,或者没有携带</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"detail\": \"Given token not valid for any token type\",\n    \"code\": \"token_not_valid\",\n    \"messages\": [\n        {\n            \"token_class\": \"AccessToken\",\n            \"token_type\": \"access\",\n            \"message\": \"Token is invalid or expired\"\n        }\n    ]\n}\n'请求需要携带token '",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 1,\n  \"mes\": \"信箱信息\",\n  \"info\": [\n      {\n          \"id\": 1,\n          \"status\": false,\n          \"favor\": false,\n          \"text\": \"dkfglfkldlkklgflk\",\n          \"title\": \"dlflgkkglkkl\",\n          \"weather\": null,\n          \"mood\": null,\n          \"img\": null\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./games/views.py",
    "groupTitle": "萌上日记"
  },
  {
    "type": "GET",
    "url": "/api/diray/",
    "title": "获取个人日记内容接口",
    "version": "0.0.1",
    "name": "获取日记信息",
    "group": "萌上日记",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jwt验证秘钥必须添加次内容请求</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>游戏名字</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>token 错误,或者没有携带</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"detail\": \"Given token not valid for any token type\",\n    \"code\": \"token_not_valid\",\n    \"messages\": [\n        {\n            \"token_class\": \"AccessToken\",\n            \"token_type\": \"access\",\n            \"message\": \"Token is invalid or expired\"\n        }\n    ]\n}\n'请求需要携带token '",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 1,\n  \"mes\": \"用户日记信息\",\n  \"info\": [\n          {\n              \"id\": 1,\n              \"text\": \"dkfglfkldlkklgflk\",\n              \"title\": \"dlflgkkglkkl\",\n              \"weather\": null,\n              \"mood\": null,\n              \"public\": false,\n              \"status\": false,\n              \"img\": null\n          },\n          {\n              \"id\": 2,\n              \"text\": \"这样很好111\",\n              \"title\": \"这样不好2222\",\n              \"weather\": null,\n              \"mood\": null,\n              \"public\": true,\n              \"status\": false,\n              \"img\": \"/media/MengShang/b0ee657175d1421dc9fd0e03a9191d4b_u5rTjY4.jpg\"\n          }\n      ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./games/views.py",
    "groupTitle": "萌上日记"
  },
  {
    "type": "PUT",
    "url": "/api/knowlage/",
    "title": "更新知识状态",
    "version": "0.0.1",
    "description": "<p>更新知识学习完成时间，根据知识所需时间添加定时任务，在过程中，用户观看广告减少时间</p>",
    "name": "更新知识学习完成时间",
    "group": "萌游知知",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jwt验证秘钥必须添加次内容请求</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>游戏名字，参数必须</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "time",
            "description": "<p>所减少的时间，以分钟为单位来计算</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>请求状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mes",
            "description": "<p>提示信息</p>"
          }
        ]
      }
    },
    "filename": "./games/views.py",
    "groupTitle": "萌游知知"
  },
  {
    "type": "POST",
    "url": "/data/know/",
    "title": "知识上传",
    "version": "0.0.1",
    "description": "<p>知识上传，提交至后台审核,也可通过GET请求+知识id获取知识</p>",
    "name": "知识上传",
    "group": "萌游知知",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "file",
            "optional": false,
            "field": "img",
            "description": "<p>图片 必须</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "text",
            "description": "<p>文本内容 必须</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "level",
            "description": "<p>等级，非必须，可选</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>标题，必须</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk2Nzg5NjIwLCJqdGkiOiIxOWNlZWU1YTYwMmI0MzViYTQwMmViNmI1ODIwNjA1YSIsInVzZXJfaWQiOjJ9.XqQLLDItehwz49_KQ9-QXznu0JuqN4HcB_42c6B9SCs\",\n    \"type\":\"BearerToken\"\n}",
          "type": "json"
        },
        {
          "title": "Header-Example:",
          "content": "{\n    \"img\":\"文件\",\n    \"title\":\"标题\",\n    \"text\":\"说话内容\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 11,\n    \"img\": \"http://127.0.0.1:8000/media/MengYou/Cache_-7d70353304914e67._NHRv8OI.jpg\",\n    \"title\": \"第2课\",\n    \"voice\": \"/static/voice/第2课.mp3\",\n    \"text\": \"说话内容\",\n    \"level\": \"1\",\n    \"is_check\": false,\n    \"status\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./games/views.py",
    "groupTitle": "萌游知知"
  },
  {
    "type": "GET",
    "url": "/api/knowlage/",
    "title": "知识学习状态",
    "version": "0.0.1",
    "description": "<p>获取用户关于此知识的学习状态</p>",
    "name": "知识学习状态",
    "group": "萌游知知",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jwt验证秘钥必须添加次内容请求</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>游戏名字，参数必须</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>知识唯一标识id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>请求状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mes",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n确定开始学习\n{\n    'status': 1,\n    'mes': '用户开始学习此知识'\n }\n 已经开始学习了，等待学习完才能开始新的\n{\n    \"status\": 0,\n    \"mes\": \"知识学习开始学习\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./games/views.py",
    "groupTitle": "萌游知知"
  },
  {
    "type": "POST",
    "url": "/api/knowlage/",
    "title": "获取知识",
    "version": "0.0.1",
    "description": "<p>获取学习知识，随机返回</p>",
    "name": "获取知识",
    "group": "萌游知知",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>jwt验证秘钥必须添加次内容请求</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>游戏名字，参数必须</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "over",
            "description": "<p>已经学习过的数据，参数可选，不携带就是随机获取一条数据，携带就是获取学习过数据</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>请求状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mes",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "knowlage",
            "description": "<p>返回的知识数据</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "knowlageing",
            "description": "<p>学习中</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n未携带over 随机返回，但数据库已经没有\n{\n\"status\": 0,\n\"mes\": \"没有知识\",\n\"knowlage\": null\n}\n携带over， 返回已经学习过的\n{\n    \"status\": 1,\n    \"mes\": \"已经学习的知识\",\n    \"knowlage\": [\n        {\n            \"id\": 12,\n            \"title\": \"第2课\",\n            \"voice\": \"/static/voice/第2课.mp3\",\n            \"text\": \"说话内容\",\n            \"level\": \"1\",\n            \"status\": false\n        }\n    ]\n\n    “knowlage_ing”:[\n        {\n            \"id\": 12,\n            \"title\": \"第2课\",\n            \"voice\": \"/static/voice/第2课.mp3\",\n            \"text\": \"说话内容\",\n            \"level\": \"1\",\n            \"status\": false\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./games/views.py",
    "groupTitle": "萌游知知"
  }
] });
