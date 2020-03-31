'use strict';

module.exports = {
  send_sms_api(mobile, code) { // 发送验证码
    const tencentcloud = require('tencentcloud-sdk-nodejs');


    const SmsClient = tencentcloud.sms.v20190711.Client;
    const models = tencentcloud.sms.v20190711.Models;

    const Credential = tencentcloud.common.Credential;
    const ClientProfile = tencentcloud.common.ClientProfile;
    const HttpProfile = tencentcloud.common.HttpProfile;

    const cred = new Credential('AKID5zh9OUhHzWrzsaBMPDnALI1WlkEWDR1M', 'FZifOvFLBm8HDvOdeOs63kLmPuDI9mAK');
    const httpProfile = new HttpProfile();
    httpProfile.endpoint = 'sms.tencentcloudapi.com';
    const clientProfile = new ClientProfile();
    clientProfile.httpProfile = httpProfile;
    const client = new SmsClient(cred, 'ap-shanghai', clientProfile);

    const req = new models.SendSmsRequest();

    const params = `{"PhoneNumberSet":["+86${mobile}"],"TemplateID":"434004","TemplateParamSet":["${code}"],"SmsSdkAppid":"1400154638"}`;
    req.from_json_string(params);


    client.SendSms(req, (errMsg, response) => {

      if (errMsg) {
        console.log(errMsg);
        return;
      }

      console.log(response.to_json_string());
    });
  },
};
