import Vue from 'vue'
import VeeValidate, {Validator}  from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN'

Validator.addLocale(zh);
const validator = new Validator();

const config = {
  locale: 'zh_CN'
}

Validator.extend('mobile', {
 messages: {
  zh_CN:field => '请输入正确的手机号码'
 },
 validate: value => {
  return /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value);
 }
});
Validator.extend('password', {
  messages: {
   zh_CN:field => '请输6至12位数密码 可以是字母数字'
  },
  validate: value => {
   return /^[a-zA-Z0-9]{6,12}$/.test(value);
  }
 });
 Validator.extend('unickname', {
  messages: {
   zh_CN:field => '请输入4至10位字符 可以是字母数字下划线'
  },
  validate: value => {
   return /^[\w]{4,10}$/.test(value);
  }
 });

const dictionary = {
  zh_CN:{
    messages:{
      email:()=>'请输入正确的邮箱',
      required:(field)=>'请输入'+field
    },
    attributes:{
      email:'邮箱',
      phone:'手机'
    }
  }
}

Vue.use(VeeValidate, config);
Vue.use(VeeValidate, dictionary);
