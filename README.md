# Node turning mysql connection and pool

## Setup

```sh
$ npm install
```

```sh
$ npm normal.js
# Visit http://localhost:4444
$ ab -c 20 -t 10 http://localhost:4444/normal

$ npm pool.js
# Visit http://localhost:4444
$ ab -c 20 -t 10 http://localhost:4444/pool2

$ npm pool2.js
# Visit http://localhost:4444
$ ab -c 20 -t 10 http://localhost:4444/pool3

```

## Video
- [CreatePool cách kết nối Mysql và Nodejs nhanh x3 lần so với cách thông thường createConnection](https://www.youtube.com/watch?v=vjHWkHm4cqo)