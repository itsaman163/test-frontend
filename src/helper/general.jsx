import { message as toastMsg } from "antd";


export const successMsg = (message) => {
  toastMsg.success(message, 3);
};

export const errorMsg = (message) => {
  toastMsg.error(message, 3);
};

export const warningMsg = (message) => {
  toastMsg.warning(message, 3);
};

export const infoMsg = (message) => {
  toastMsg.info(message, 3);
};

export const notificationMsg = (message) => {
  toastMsg.info({
    content: message,
    duration: 5,
  });
};
