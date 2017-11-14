
//构造上传函数
export default function (key, localFile) {
  return new Promise((resolve, reject) => {
    //生成上传 Token
    const token = uptoken(bucket, key);
    const extra = new qiniu.io.PutExtra();
    qiniu.io.putFile(token, key, localFile, extra, function(err, ret) {
      if(!err) {
        resolve(ret);
        // 上传成功， 处理返回值
        console.log(ret.hash, ret.key, ret.persistentId);
      } else {
        // 上传失败， 处理返回代码
        console.log(err);
        reject(err);
      }
    });
  });
}
