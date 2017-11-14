import qiniu from "qiniu";
//需要填写你的 Access Key 和 Secret Key
qiniu.conf.ACCESS_KEY = '5RgMBeUHJn6WzQ8kPu4tE8xQWbOcTPx39ZgAXTss';
qiniu.conf.SECRET_KEY = 'SD8dKjnQRvY9YrpymbpRJLAf3oOUvtPfbk7em18D';
//要上传的空间
const kBucketName = 'willayu';
const options = {
  scope: kBucketName,
};
const mac = new qiniu.auth.digest.Mac(qiniu.conf.ACCESS_KEY, qiniu.conf.SECRET_KEY);
const config = new qiniu.conf.Config();
// 空间对应的机房
config.zone = qiniu.zone.Zone_z2;

//构建上传策略函数
export default function () {
  const putPolicy = new qiniu.rs.PutPolicy(options);
  return putPolicy.uploadToken(mac);
}
