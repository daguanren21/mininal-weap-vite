const formatTime = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return [year, month, day].map(formatNumber).join("/") + " " + [hour, minute, second].map(formatNumber).join(":");
};
const formatNumber = (n) => {
  const s = n.toString();
  return s[1] ? s : "0" + s;
};
Component({
  data: {
    logs: []
  },
  lifetimes: {
    attached() {
      this.setData({
        logs: (wx.getStorageSync("logs") || []).map((log) => {
          return {
            date: formatTime(new Date(log)),
            timeStamp: log
          };
        })
      });
    }
  }
});
