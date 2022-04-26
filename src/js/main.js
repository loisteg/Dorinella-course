import "./_vendor";
import "./_functions";
import "./_components";

import $ from "jquery";

$("#form").on("submit", function (e) {
  e.preventDefault();

  const TOKEN = "";
  const CHAT_ID = "";
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  let name = this.name.value;
  let phone = this.phone.value;
  let tgName = this.tg_name.value;

  const message = `
  <b>ФИ: ${name}</b>
  <b>Номер телефона: ${phone}</b>
  <b>Номер телефона: @${tgName}</b>`;

  // TODO: Вставить нужный url для отправки
  const request = $.ajax(URI_API, {
    type: "POST",
    data: {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    },
  });

  // выполняется после *успешного выполнения запроса
  request.done(function () {
    name = "";
    phone = "";
    tgName = "";
  });
  // выполняется после *провального выполнения запроса
  request.fail(function (err) {
    console.log(err.message);
    name = "";
    phone = "";
    tgName = "";
  });
});
