const os = require('os');

function getSystemInfo() {
  const userInfo = os.userInfo();
  const osInfo = {
    OS: os.type(),
    OSVersion: os.release(),
    Architecture: os.arch(),
    TotalMemory: (os.totalmem() / 1024 / 1024).toFixed(2) + ' MB',
    FreeMemory: (os.freemem() / 1024 / 1024).toFixed(2) + ' MB',
    User: userInfo.username,
  };

  console.log('Operating System Info:');
  console.log(JSON.stringify(osInfo, null, 2));
}

getSystemInfo();
