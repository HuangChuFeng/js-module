require(['num', 'getUser'], function(num, user) { 
    // 此时已经在最前面声明并初始化了要用到的所有模块
    if (false) {
      // 即便没用到该模块，但还是提前执行了
      user.getName();
    } 
    return false;
});