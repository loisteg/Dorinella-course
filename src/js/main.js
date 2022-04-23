import './_vendor';
import './_functions';
import './_components';

import $ from 'jquery';

$('#form').on('submit', function (e) {
  e.preventDefault();

  const name = this.name;
  const phone = this.phone;
  const tgName = this.tg_name;

  // TODO: Вставить нужный url для отправки
  const request = $.ajax('', {
    type: 'POST',
    data: {},
  });

  // выполняется после *успешного выполнения запроса
  request.done(function () {});
  // выполняется после *провального выполнения запроса
  request.fail(function () {});
});
