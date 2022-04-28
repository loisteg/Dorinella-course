import './_vendor';
import './_functions';
import './_components';

import $ from 'jquery';

// Cards
function changeCard(item) {
  $(item).each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.program-info').eq(i).toggleClass('program-info_active');
      $('.program-list').eq(i).toggleClass('program-list_active');
    });
  });
}

changeCard('.program-info__button');
changeCard('.program-list__button');

// POST
$('#form').on('submit', function (e) {
  e.preventDefault();

  const TOKEN = '5369957968:AAHrLt-fNVbjC9J3B_whNH4lcVopmemnl58';
  const CHAT_ID = '-1001576354120';
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const success = document.querySelector('.success'),
    failure = document.querySelector('.failure');

  let name = document?.querySelector('#input-name'),
    phone = document?.querySelector('#input-phone'),
    tgName = document?.querySelector('#input-tg-name');

  const message = `
  <b>ФИ: ${name.value}</b>
  <b>Номер телефона: ${phone.value}</b>
  <b>Номер телефона: @${tgName.value}</b>`;

  // TODO: Вставить нужный url для отправки
  const request = $.ajax(URI_API, {
    type: 'POST',
    data: {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
    },
  });

  // выполняется после *успешного выполнения запроса
  request.done(function () {
    setTimeout(() => {
      success.classList.remove('success_active');
    }, 3000);
    success.classList.add('success_active');

    name = '';
    phone = '';
    tgName = '';
  });
  // выполняется после *провального выполнения запроса
  request.fail(function (err) {
    setTimeout(() => {
      failure.classList.remove('failure_active');
    }, 3000);
    failure.classList.add('failure_active');

    console.log(err.message);
    name = '';
    phone = '';
    tgName = '';
  });
});
