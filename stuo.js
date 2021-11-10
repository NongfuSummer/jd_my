/*
软件名称:商拓 微信扫描二维码下载注册
更新时间：2021-11-09
脚本说明：商拓
脚本为自动完成商拓的分红金任务、抢券任务和下级红包任务。

随着时间延长，每日收益逐渐上涨，现在一天5元收益。

使用方法:
进入商拓首页，随便找一个广告，点击更多，倒计时结束可自动获得数据。
或者在看完广告后，随便找一个请求头里的Authorization的值即为ck。

新人玩法：注册后，全球分红会有600元，，点击提取分红金，在个人中心的分红余额处点击提现，上传微信收款码、支付宝收款码和支付宝首页后，即可正常提现，提现到账后，启用脚本即可。

ck有效期：三天


扫描二维码打开注册下载:https://gitee.com/rcfan1/js/raw/master/pictures/stuo.png
或微信打开https://shatuvip.com/pages/login/register?recom_code=4314244
推荐码 : 4314244
本脚本以学习为主！


商拓
boxjs：
https://gitee.com/rcfan1/js/raw/master/rcfan.boxjs.json
[task_local]
定时一天运行一次即可

[rewrite_local]
#商拓
https://api.shatuvip.com/advert url script-request-body https://gitee.com/rcfan1/js/raw/master/stuo.js

[MITM]
hostname = api.shatuvip.com

*/

const $ = new Env('商拓');
let status;
status = (status = ($.getval("stuostatus") || "1")) > 1 ? `${status}` : ""; // 账号扩展字符
let stuohdArr = [], stuocount = ''
let times = Math.round(Date.now() / 1000)
let stuohd = $.isNode() ? (process.env.stuohd ? process.env.stuohd : "") : ($.getdata('stuohd') ? $.getdata('stuohd') : "")
//let stuobody = $.isNode() ? (process.env.stuobody ? process.env.stuobody : "") : ($.getdata('stuobody') ? $.getdata('stuobody') : "")
let cid = ''
let ggid = ''
let token = ''
let qid = ''
let qprice = ''
let xjid = ''
let hy = ''
let fhye = ''
let tgye = ''
let hbye = ''
let stuohds = ""
//let stuobodys = ""

!(async () => {
    if (typeof $request !== "undefined") {
      stuock()

    } else {
      if (!$.isNode()) {
      stuohdArr.push($.getdata('stuohd'))
      //stuobodyArr.push($.getdata('stuobody'))
      let stuocount = ($.getval('stuocount') || '1');
      for (let i = 2; i <= stuocount; i++) {
        stuohdArr.push($.getdata(`stuohd${i}`))
        //stuobodyArr.push($.getdata(`stuobody${i}`))
      }
      console.log(`------------- 共${stuohdArr.length}个账号-------------\n`)
      for (let i = 0; i < stuohdArr.length; i++) {
        if (stuohdArr[i]) {
          //stuobody = stuobodyArr[i];
          stuohd = stuohdArr[i];
          $.index = i + 1;
          console.log(`\n开始【商拓${$.index}】`)
          await getid();
        await $.wait(6000);
        await change();
        await $.wait(1000);
        //await stuoinfo();
        //await $.wait(1000);
        await changeq();
        await $.wait(2000);
        await getqid();
        await $.wait(2000);
        for (l = 0; l < 13; l++) {
          await getggid();
          await $.wait(1000);
          await lookgg();
          await $.wait(6000);
          await qquan1();
        }
        for (m = 0; m < 13; m++) {
          await getggid();
          await $.wait(1000);
          await lookgg();
          await $.wait(6000);
          await qquan2();
        }
        for (n = 0; n < 13; n++) {
          await getggid();
          await $.wait(1000);
          await lookgg();
          await $.wait(6000);
          await qquan10();
        }
        for (x = 0; x < 20; x++) {
            $.index = x + 1;
          await getxjid();
          await $.wait(1000);
        }
        for (z = 0; z < 20; z++) {
          $.index = z + 1;
        await getxjid2();
        await $.wait(1000);
      }
        await withdraw();
        await $.wait(2000);
          

        }
      }
    } else {
      if (process.env.stuohd && process.env.stuohd.indexOf('@') > -1) {
        stuohdArr = process.env.stuohd.split('@');
        console.log(`您选择的是用"@"隔开\n`)
    } else {
      stuohds = [process.env.stuohd]
    };
    Object.keys(stuohds).forEach((item) => {
      if (stuohds[item]) {
        stuohdArr.push(stuohds[item])
      }
  })
   // if (process.env.stuobody && process.env.stuobody.indexOf('@') > -1) {
     // stuobodyArr = process.env.stuobody.split('@');
      //console.log(`您选择的是用"@"隔开\n`)
  //} else {
    //stuobodys = [process.env.stuobody]
  //};
 
    //Object.keys(stuobodys).forEach((item) => {
    //if (stuobodys[item]) {
     // stuobodyArr.push(stuobodys[item])
  //}
//})
console.log(`------------- 共${stuohdArr.length}个账号-------------\n`)
    for (let k = 0; k < stuohdArr.length; k++) {
      stuohd = stuohdArr[k];
  //    stuobody = stuobodyArr[k];
        $.index = k + 1;
        console.log(`\n开始【商拓${$.index}】`)
        await getid();
        await $.wait(6000);
        await change();
        await $.wait(1000);
        //await stuoinfo();
       // await $.wait(1000);
        await changeq();
        await $.wait(2000);
        await getqid();
        await $.wait(2000);
        for (l = 0; l < 13; l++) {
          await getggid();
          await $.wait(1000);
          await lookgg();
          await $.wait(6000);
          await qquan1();
        }
        for (m = 0; m < 13; m++) {
          await getggid();
          await $.wait(1000);
          await lookgg();
          await $.wait(6000);
          await qquan2();
        }
        for (n = 0; n < 13; n++) {
          await getggid();
          await $.wait(1000);
          await lookgg();
          await $.wait(6000);
          await qquan10();
        }
        for (x = 0; x < 20; x++) {
            $.index = x + 1;
          await getxjid();
          await $.wait(1000);
        }
        for (z = 0; z < 20; z++) {
          $.index = z + 1;
        await getxjid2();
        await $.wait(1000);
      }
        await withdraw();
        await $.wait(2000);
    }
}

}
})()

.catch((e) => $.logErr(e))
.finally(() => $.done())



function stuock() {
  if ($request.url.indexOf("completeTask") > -1) {
    const stuohd = $request.headers['Authorization']
    if (stuohd) $.setdata(stuohd, `stuohd${status}`)
    $.log(`stuohd: ${stuohd}`)
    $.msg(`获取stuohd: 成功🎉`, `stuohd: ${stuohd}`)
    //const stuobody = $request.body['Secret']
    //if (stuobody) $.setdata(stuobody, `stuobody${status}`)
    //$.log(`stuobody: ${stuobody}`)
    //$.msg(`获取stuobody: 成功🎉`, `stuobody: ${stuobody}`)

  }
}


//商拓广告列表id
function getid(timeout = 0) {
  return new Promise((resolve) => {
    const headers = {
      "Host": "api.shatuvip.com",
      "Connection": "keep-alive",
      Authorization: stuohd,
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; ANA-AN00 Build/HUAWEIANA-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36  XiaoMi/MiuiBrowser/10.8.1 LT-APP/44/106/YM-RT/",
      "Content-Type": "application/json",
      "Accept": "*/*",
      "Origin": "https://shatuvip.com",
      "X-Requested-With": "site.yjkj.test.h5shangtuo",
      "Sec-Fetch-Site": "same-site",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": "https://shatuvip.com/pages/expand/index",
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
    };

    let request = {
      url: 'https://api.shatuvip.com/advert/getAdvertPage?type=2&pageNo=1',
      headers: headers,
    }
    $.get(request, async (err, resp, data) => {

      const result = JSON.parse(data)
      if (result.code == 0) {

        for (i = 0; i < result.result.length; i++) {
          cid = result.result[i].id
          name = result.result[i].content

          console.log(`\n商拓获取任务列表ID成功:\n当前任务ID:${cid}\n当前任务标题:${name}`)
          await gettask();
          await $.wait(11000);
          await getmoney();
          await $.wait(2000);
        }


      } else {
        console.log('\n商拓获取任务列表ID失败')
      }
      resolve()
    })
  })
}


//浏览广告
function gettask(timeout = 0) {
  return new Promise((resolve) => {
    const headers = {
      "Host": "api.shatuvip.com",
      "Connection": "keep-alive",
      Authorization: stuohd,
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; ANA-AN00 Build/HUAWEIANA-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36  XiaoMi/MiuiBrowser/10.8.1 LT-APP/44/106/YM-RT/",
      "Content-Type": "application/json",
      "Accept": "*/*",
      "Origin": "https://shatuvip.com",
      "X-Requested-With": "site.yjkj.test.h5shangtuo",
      "Sec-Fetch-Site": "same-site",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": `https://shatuvip.com/pages/ads/details?id=${cid}`,
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
    };


    let request = {
      url: `https://api.shatuvip.com/advert/getAdvertInfo?id=${cid}`,
      headers: headers,
    }
    $.get(request, async (err, resp, data) => {

      const result = JSON.parse(data)
      if (result.code == 0) {

        console.log(`\n商拓开始浏览广告`)
      } else {
        console.log('\n商拓浏览广告失败')
      }

      resolve()
    })
  })
}




//获取收益
function getmoney(timeout = 0) {
  return new Promise((resolve, reject) => {
    const headers = {
      "Host": "api.shatuvip.com",
      "Connection": "keep-alive",
      Authorization: stuohd,
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; ANA-AN00 Build/HUAWEIANA-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36  XiaoMi/MiuiBrowser/10.8.1 LT-APP/44/106/YM-RT/",
      "Content-Type": "application/json",
      "Accept": "*/*",
      "Origin": "https://shatuvip.com",
      "X-Requested-With": "site.yjkj.test.h5shangtuo",
      "Sec-Fetch-Site": "same-site",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": `https://shatuvip.com/pages/ads/details?id=${cid}`,
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
    };

    const body = {
      "id": `${cid}`,
      "secret": "fe6082755858912dc0aed9a060cf063a"
    }

    let request = {
      url: `https://api.shatuvip.com/advert/completeTask`,
      headers: headers,
      body: body,
    }

    $.post(request, async (error, response, data) => {
      //console.log(data)
      let result = JSON.parse(data)
      if (result.code == 0) {
        console.log('商拓浏览广告： ' + result.msg)

      } else {
        console.log('商拓浏览广告： ' + result.msg)
      }
      resolve()
    })
  })
}




//提取分红金
function change(timeout = 0) {
  return new Promise((resolve, reject) => {
    const headers = {
      "Host": "api.shatuvip.com",
      "Connection": "keep-alive",
      Authorization: stuohd,
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; ANA-AN00 Build/HUAWEIANA-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36  XiaoMi/MiuiBrowser/10.8.1 LT-APP/44/106/YM-RT/",
      "Content-Type": "application/json",
      "Accept": "*/*",
      "Origin": "https://shatuvip.com",
      "X-Requested-With": "site.yjkj.test.h5shangtuo",
      "Sec-Fetch-Site": "same-site",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": `https://shatuvip.com/pages/bonus/index`,
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
    };
    $.get({
      url: `https://api.shatuvip.com/user/changeDividendBonusToBalance`,
      headers: headers,
    }, async (error, response, data) => {
      //console.log(data)
      let result = JSON.parse(data)
      if (result.code == 0) {
        console.log('商拓提取分红金成功： ' + result.msg)
        await $.wait(1000);
      } else {
        console.log('商拓提取分红金失败： ' + result.msg)
      }
      resolve()
    })
  })
}

//获取收益信息
function stuoinfo(timeout = 0) {
  return new Promise((resolve, reject) => {
    const headers = {
      "Host": "api.shatuvip.com",
      "Connection": "keep-alive",
      Authorization: stuohd,
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; ANA-AN00 Build/HUAWEIANA-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36  XiaoMi/MiuiBrowser/10.8.1 LT-APP/44/106/YM-RT/",
      "Content-Type": "application/json",
      "Accept": "*/*",
      "Origin": "https://shatuvip.com",
      "X-Requested-With": "site.yjkj.test.h5shangtuo",
      "Sec-Fetch-Site": "same-site",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": `https://shatuvip.com/pages/user/index`,
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
    };
    $.get({
      url: `https://api.shatuvip.com/user/getUserInfoData`,
      headers: headers,
    }, async (error, response, data) => {
      //console.log(data)
      let result = JSON.parse(data)
      if (result.code == 0) {
        console.log('商拓获取用户信息成功： ' + result.msg)
       fhye = result.result.balance_with
       tgye = result.result.balance_extend
       hbye = result.result.balance_packet
      
      if (fhye > 88) {
        await withdraw1();
        await $.wait(2000);

      } else if (tgye > 1) {
        await withdraw2();
        await $.wait(2000);
      } 
    
      } else {
        console.log('商拓获取用户信息失败： ' + result.msg)
      }
      resolve()
    })
  })
}


//转为消费券
function changeq(timeout = 0) {
  return new Promise((resolve, reject) => {
    const headers = {
      "Host": "api.shatuvip.com",
      "Connection": "keep-alive",
      Authorization: stuohd,
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; ANA-AN00 Build/HUAWEIANA-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36  XiaoMi/MiuiBrowser/10.8.1 LT-APP/44/106/YM-RT/",
      "Content-Type": "application/json",
      "Accept": "*/*",
      "Origin": "https://shatuvip.com",
      "X-Requested-With": "site.yjkj.test.h5shangtuo",
      "Sec-Fetch-Site": "same-site",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": `https://shatuvip.com/pages/user/pack/index`,
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
    };

    const body = {
      "balance":`${hbye}`
    }

    let request = {
      url: `https://api.shatuvip.com/user/balancePackChangeBalance`,
      headers: headers,
      body: body,
    }


    $.post(request, async (error, response, data) => {
      //console.log(data)
      let result = JSON.parse(data)
      if (result.code == 0) {
        console.log(`商拓转换${hbye}元消费券成功 ` + result.msg)

      } else {
        console.log(`商拓转换${hbye}元消费券失败 ` + result.msg)
      }
      resolve()
    })
  })
}



//商拓券id
function getqid(timeout = 0) {
  return new Promise((resolve) => {
    const headers = {
      "Host": "api.shatuvip.com",
      "Connection": "keep-alive",
      Authorization: stuohd,
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; ANA-AN00 Build/HUAWEIANA-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36  XiaoMi/MiuiBrowser/10.8.1 LT-APP/44/106/YM-RT/",
      "Content-Type": "application/json",
      "Accept": "*/*",
      "Origin": "https://shatuvip.com",
      "X-Requested-With": "site.yjkj.test.h5shangtuo",
      "Sec-Fetch-Site": "same-site",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": "https://shatuvip.com/pages/user/trade/index",
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
    };

    let request = {
      url: 'https://api.shatuvip.com/user/getTradeToPage?pageNo=1',
      headers: headers,
    }
    $.get(request, async (err, resp, data) => {

      const result = JSON.parse(data)
      if (result.code == 0) {

        for (i = 0; i < result.result.length; i++) {
          qid = result.result[i].id
          pr = result.result[i].price
          console.log(`\n商拓获取券ID成功:\n当前任务ID:${qid}`)
        if (pr == 0.1) {
        await qsold1();
          await $.wait(2000);

      } else if (pr == 0.2){
        await qsold1();
          await $.wait(2000);
      }else {
        await qsold2();
          await $.wait(2000)
      }
    
        }


      } else {
        console.log('\n商拓获取券ID失败')
      }
      resolve()
    })
  })
}






//0.1和0.2券出售
function qsold1(timeout = 0) {
  return new Promise((resolve, reject) => {
    const headers = {
      "Host": "api.shatuvip.com",
      "Connection": "keep-alive",
      Authorization: stuohd,
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; ANA-AN00 Build/HUAWEIANA-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36  XiaoMi/MiuiBrowser/10.8.1 LT-APP/44/106/YM-RT/",
      "Content-Type": "application/json",
      "Accept": "*/*",
      "Origin": "https://shatuvip.com",
      "X-Requested-With": "site.yjkj.test.h5shangtuo",
      "Sec-Fetch-Site": "same-site",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": "https://shatuvip.com/pages/user/trade/index",
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
    };

    const body = {
      "id": `${qid}`,
      "price": `0.05`
    }

    let request = {
      url: `https://api.shatuvip.com/user/tradePutShop`,
      headers: headers,
      body: body,
    }


    $.post(request, async (error, response, data) => {
      //console.log(data)
      let result = JSON.parse(data)
      if (result.code == 0) {
        console.log('出售商拓券： ' + result.msg)

      } else {
        console.log('出售商拓券： ' + result.msg)
      }
      resolve()
    })
  })
}

//10券出售
function qsold2(timeout = 0) {
  return new Promise((resolve, reject) => {
    const headers = {
      "Host": "api.shatuvip.com",
      "Connection": "keep-alive",
      Authorization: stuohd,
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; ANA-AN00 Build/HUAWEIANA-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36  XiaoMi/MiuiBrowser/10.8.1 LT-APP/44/106/YM-RT/",
      "Content-Type": "application/json",
      "Accept": "*/*",
      "Origin": "https://shatuvip.com",
      "X-Requested-With": "site.yjkj.test.h5shangtuo",
      "Sec-Fetch-Site": "same-site",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": "https://shatuvip.com/pages/user/trade/index",
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
    };

    const body = {
      "id": `${qid}`,
      "price": `9.7`
    }

    let request = {
      url: `https://api.shatuvip.com/user/tradePutShop`,
      headers: headers,
      body: body,
    }


    $.post(request, async (error, response, data) => {
      //console.log(data)
      let result = JSON.parse(data)
      if (result.code == 0) {
        console.log('出售商拓券： ' + result.msg)

      } else {
        console.log('出售商拓券： ' + result.msg)
      }
      resolve()
    })
  })
}


//商拓抢券广告id
function getggid(timeout = 0) {
  return new Promise((resolve, reject) => {
    const headers = {
      "Host": "api.shatuvip.com",
      "Connection": "keep-alive",
      Authorization: stuohd,
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; ANA-AN00 Build/HUAWEIANA-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36  XiaoMi/MiuiBrowser/10.8.1 LT-APP/44/106/YM-RT/",
      "Content-Type": "application/json",
      "Accept": "*/*",
      "Origin": "https://shatuvip.com",
      "X-Requested-With": "site.yjkj.test.h5shangtuo",
      "Sec-Fetch-Site": "same-site",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": `https://shatuvip.com/pages/bonus/index`,
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
    };
    $.get({
      url: `https://api.shatuvip.com/advert/getBondAdvertId`,
      headers: headers,
    }, async (error, response, data) => {
      //console.log(data)
      let result = JSON.parse(data)
      if (result.code == 0) {
        ggid = result.result.id
        token = result.result.token
        console.log(`\n商拓获取抢券广告任务列表ID成功:\n当前任务ID:${ggid}`)
        await $.wait(1000);
      } else {
        console.log('商拓获取抢券广告失败')
      }
      resolve()
    })
  })
}


//浏览商拓抢券广告
function lookgg(timeout = 0) {
  return new Promise((resolve, reject) => {
    const headers = {
      "Host": "api.shatuvip.com",
      "Connection": "keep-alive",
      Authorization: stuohd,
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; ANA-AN00 Build/HUAWEIANA-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36  XiaoMi/MiuiBrowser/10.8.1 LT-APP/44/106/YM-RT/",
      "Content-Type": "application/json",
      "Accept": "*/*",
      "Origin": "https://shatuvip.com",
      "X-Requested-With": "site.yjkj.test.h5shangtuo",
      "Sec-Fetch-Site": "same-site",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": `https://shatuvip.com/pages/volume/index`,
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
    };
    $.get({
      url: `https://api.shatuvip.com/advert/getAdvertInfo?id=${ggid}`,
      headers: headers,
    }, async (error, response, data) => {
      //console.log(data)
      let result = JSON.parse(data)
      if (result.code == 0) {
        console.log(`开始浏览抢券广告`)
        await $.wait(1000);
      } else {
        console.log('商拓浏览抢券广告失败')
      }
      resolve()
    })
  })
}


//抢0.1券
function qquan1(timeout = 0) {
  return new Promise((resolve, reject) => {
    const headers = {
      "Host": "api.shatuvip.com",
      "Connection": "keep-alive",
      Authorization: stuohd,
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; ANA-AN00 Build/HUAWEIANA-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36  XiaoMi/MiuiBrowser/10.8.1 LT-APP/44/106/YM-RT/",
      "Content-Type": "application/json",
      "Accept": "*/*",
      "Origin": "https://shatuvip.com",
      "X-Requested-With": "site.yjkj.test.h5shangtuo",
      "Sec-Fetch-Site": "same-site",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": "https://shatuvip.com/pages/volume/index",
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
    };

    const body = {
      "bond_id": "1",
      "__token__": `${token}`
    }

    let request = {
      url: `https://api.shatuvip.com/bond/grab`,
      headers: headers,
      body: body,
    }


    $.post(request, async (error, response, data) => {
      //console.log(data)
      let result = JSON.parse(data)
      if (result.code == 0) {
        console.log('商拓抢0.1券成功： ' + result.msg)

      } else {
        console.log('商拓抢0.1券失败： ' + result.msg)
      }
      resolve()
    })
  })
}

//抢0.2券
function qquan2(timeout = 0) {
  return new Promise((resolve, reject) => {
    const headers = {
      "Host": "api.shatuvip.com",
      "Connection": "keep-alive",
      Authorization: stuohd,
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; ANA-AN00 Build/HUAWEIANA-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36  XiaoMi/MiuiBrowser/10.8.1 LT-APP/44/106/YM-RT/",
      "Content-Type": "application/json",
      "Accept": "*/*",
      "Origin": "https://shatuvip.com",
      "X-Requested-With": "site.yjkj.test.h5shangtuo",
      "Sec-Fetch-Site": "same-site",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": "https://shatuvip.com/pages/volume/index",
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
    };

    const body = {
      "bond_id": "24",
      "__token__": `${token}`
    }

    let request = {
      url: `https://api.shatuvip.com/bond/grab`,
      headers: headers,
      body: body,
    }


    $.post(request, async (error, response, data) => {
      //console.log(data)
      let result = JSON.parse(data)
      if (result.code == 0) {
        console.log('商拓抢0.2券成功： ' + result.msg)

      } else {
        console.log('商拓抢0.2券失败： ' + result.msg)
      }
      resolve()
    })
  })
}

//抢10券
function qquan10(timeout = 0) {
  return new Promise((resolve, reject) => {
    const headers = {
      "Host": "api.shatuvip.com",
      "Connection": "keep-alive",
      Authorization: stuohd,
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; ANA-AN00 Build/HUAWEIANA-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36  XiaoMi/MiuiBrowser/10.8.1 LT-APP/44/106/YM-RT/",
      "Content-Type": "application/json",
      "Accept": "*/*",
      "Origin": "https://shatuvip.com",
      "X-Requested-With": "site.yjkj.test.h5shangtuo",
      "Sec-Fetch-Site": "same-site",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": "https://shatuvip.com/pages/volume/index",
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
    };

    const body = {
      "bond_id": "9",
      "__token__": `${token}`
    }

    let request = {
      url: `https://api.shatuvip.com/bond/grab`,
      headers: headers,
      body: body,
    }


    $.post(request, async (error, response, data) => {
      //console.log(data)
      let result = JSON.parse(data)
      if (result.code == 0) {
        console.log('商拓抢10券成功： ' + result.msg)

      } else {
        console.log('商拓抢10券失败： ' + result.msg)
      }
      resolve()
    })
  })
}


//抢50券 100券/4,200/5,300/6,400/7,500/8,600/26,700/27,800/28,900/29,1000/10,1500/30,2000/11,3000/31,4000/12,5000/13
function qquan50(timeout = 0) {
  return new Promise((resolve, reject) => {
    const headers = {
      "Host": "api.shatuvip.com",
      "Connection": "keep-alive",
      Authorization: stuohd,
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; ANA-AN00 Build/HUAWEIANA-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36  XiaoMi/MiuiBrowser/10.8.1 LT-APP/44/106/YM-RT/",
      "Content-Type": "application/json",
      "Accept": "*/*",
      "Origin": "https://shatuvip.com",
      "X-Requested-With": "site.yjkj.test.h5shangtuo",
      "Sec-Fetch-Site": "same-site",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": "https://shatuvip.com/pages/volume/index",
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
    };

    const body = {
      "bond_id": "3",
      "__token__": `${token}`
    }

    let request = {
      url: `https://api.shatuvip.com/bond/grab`,
      headers: headers,
      body: body,
    }


    $.post(request, async (error, response, data) => {
      //console.log(data)
      let result = JSON.parse(data)
      if (result.code == 0) {
        console.log('商拓抢50券成功： ' + result.msg)

      } else {
        console.log('商拓抢50券失败： ' + result.msg)
      }
      resolve()
    })
  })
}


//获取下级id
function getxjid(timeout = 0) {
  return new Promise((resolve) => {
    const headers = {
      "Host": "api.shatuvip.com",
      "Connection": "keep-alive",
      Authorization: stuohd,
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; ANA-AN00 Build/HUAWEIANA-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36  XiaoMi/MiuiBrowser/10.8.1 LT-APP/44/106/YM-RT/",
      "Content-Type": "application/json",
      "Accept": "*/*",
      "Origin": "https://shatuvip.com",
      "X-Requested-With": "site.yjkj.test.h5shangtuo",
      "Sec-Fetch-Site": "same-site",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": "https://shatuvip.com/pages/expand/index",
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
    };

    let request = {
      url: `https://api.shatuvip.com/team/getALlRecommendAdvertListPage?pageNo=${$.index}&type=1`,
      headers: headers,
    }
    $.get(request, async (err, resp, data) => {

      const result = JSON.parse(data)
      if (result.code == 0) {

        for (y = 0; y < result.result.length; y++) {
          xjid = result.result[y].recom_code
          console.log(`获取下级id成功\n当前任务ID:${xjid}`)
          hy = result.result[y].receive
          console.log(hy)
        if (hy == 1) {
          await hyhb();
          await $.wait(1000);
        }
         
        }

      } else {
        console.log('\n商拓获取下级ID失败')
      }
      resolve()
    })
  })
}

//活跃用户红包
function hyhb(timeout = 0) {
  return new Promise((resolve, reject) => {
    const headers = {
      "Host": "api.shatuvip.com",
      "Connection": "keep-alive",
      Authorization: stuohd,
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; ANA-AN00 Build/HUAWEIANA-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36  XiaoMi/MiuiBrowser/10.8.1 LT-APP/44/106/YM-RT/",
      "Content-Type": "application/json",
      "Accept": "*/*",
      "Origin": "https://shatuvip.com",
      "X-Requested-With": "site.yjkj.test.h5shangtuo",
      "Sec-Fetch-Site": "same-site",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": "https://shatuvip.com/pages/user/team/index",
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
    };

    const body = {
      "recom_code": `${xjid}`
    }

    let request = {
      url: `https://api.shatuvip.com/team/grabTeamWith`,
      headers: headers,
      body: body,
    }


    $.post(request, async (error, response, data) => {
      //console.log(data)
      let result = JSON.parse(data)
      if (result.code == 0) {
        console.log('商拓活跃红包： ' + result.msg)

      } else {
        console.log('商拓活跃红包： ' + result.msg)
      }
      resolve()
    })
  })
}


//获取下级id
function getxjid2(timeout = 0) {
  return new Promise((resolve) => {
    const headers = {
      "Host": "api.shatuvip.com",
      "Connection": "keep-alive",
      Authorization: stuohd,
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; ANA-AN00 Build/HUAWEIANA-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36  XiaoMi/MiuiBrowser/10.8.1 LT-APP/44/106/YM-RT/",
      "Content-Type": "application/json",
      "Accept": "*/*",
      "Origin": "https://shatuvip.com",
      "X-Requested-With": "site.yjkj.test.h5shangtuo",
      "Sec-Fetch-Site": "same-site",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": "https://shatuvip.com/pages/expand/index",
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
    };

    let request = {
      url: `https://api.shatuvip.com/team/getALlRecommendAdvertListPage?pageNo=${$.index}&type=2`,
      headers: headers,
    }
    $.get(request, async (err, resp, data) => {

      const result = JSON.parse(data)
      if (result.code == 0) {

        for (y = 0; y < result.result.length; y++) {
          xjid = result.result[y].recom_code
          console.log(`获取下级id成功\n当前任务ID:${xjid}`)
          hy = result.result[y].receive
          console.log(hy)
        if (hy == 1) {
          await hyhb();
          await $.wait(1000);
        }
         
        }

      } else {
        console.log('\n商拓获取下级ID失败')
      }
      resolve()
    })
  })
}




//提现
function withdraw(timeout = 0) {
  return new Promise((resolve, reject) => {
    const headers = {
      "Host": "api.shatuvip.com",
      "Connection": "keep-alive",
      Authorization: stuohd,
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; ANA-AN00 Build/HUAWEIANA-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36  XiaoMi/MiuiBrowser/10.8.1 LT-APP/44/106/YM-RT/",
      "Content-Type": "application/json",
      "Accept": "*/*",
      "Origin": "https://shatuvip.com",
      "X-Requested-With": "site.yjkj.test.h5shangtuo",
      "Sec-Fetch-Site": "same-site",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": `https://shatuvip.com/pages/user/balance/reflect`,
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
    };
    const body = {
      "id": "21",
      "type": "1"
    }
    $.post({
      url: `https://api.shatuvip.com/withdrawal/balanceWithdrawal`,
      headers: headers,
      body: body,
    }, async (error, response, data) => {
      //console.log(data)
      let result = JSON.parse(data)
      if (result.code == 0) {
        console.log('商拓' + result.msg)
        await $.wait(1000);
      } else {
        console.log('商拓' + result.msg)
      }
      resolve()
    })
  })
}

//分红提现
function withdraw1(timeout = 0) {
  return new Promise((resolve, reject) => {
    const headers = {
      "Host": "api.shatuvip.com",
      "Connection": "keep-alive",
      Authorization: stuohd,
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; ANA-AN00 Build/HUAWEIANA-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36  XiaoMi/MiuiBrowser/10.8.1 LT-APP/44/106/YM-RT/",
      "Content-Type": "application/json",
      "Accept": "*/*",
      "Origin": "https://shatuvip.com",
      "X-Requested-With": "site.yjkj.test.h5shangtuo",
      "Sec-Fetch-Site": "same-site",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": `https://shatuvip.com/pages/user/balance/reflect`,
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
    };

    $.get({
      url: `https://api.shatuvip.com/withdrawal/with?withdrawal_id=33`,
      headers: headers,
    }, async (error, response, data) => {
      //console.log(data)
      let result = JSON.parse(data)
      if (result.code == 0) {
        console.log('商拓分红88元提现成功' + result.msg)
        await $.wait(1000);
      } else {
        console.log('商拓分红提现失败' + result.msg)
      }
      resolve()
    })
  })
}

//推广提现
function withdraw2(timeout = 0) {
  return new Promise((resolve, reject) => {
    const headers = {
      "Host": "api.shatuvip.com",
      "Connection": "keep-alive",
      Authorization: stuohd,
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; ANA-AN00 Build/HUAWEIANA-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36  XiaoMi/MiuiBrowser/10.8.1 LT-APP/44/106/YM-RT/",
      "Content-Type": "application/json",
      "Accept": "*/*",
      "Origin": "https://shatuvip.com",
      "X-Requested-With": "site.yjkj.test.h5shangtuo",
      "Sec-Fetch-Site": "same-site",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": `https://shatuvip.com/pages/user/popularize/reflect`,
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
    };

    $.get({
      url: `https://api.shatuvip.com/withdrawal/with?withdrawal_id=48`,
      headers: headers,
    }, async (error, response, data) => {
      //console.log(data)
      let result = JSON.parse(data)
      if (result.code == 0) {
        console.log('商拓推广1元提现成功' + result.msg)
        await $.wait(1000);
      } else {
        console.log('商拓推广提现失败' + result.msg)
      }
      resolve()
    })
  })
}

function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))); let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
