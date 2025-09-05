const btn = document.getElementById('downbtn');

btn.addEventListener('click', function () {
  console.log('success');

  let realtext = document.querySelector('#memo');
  let file_name = document.querySelector('.inputtitle');

  const content = realtext.value.trim() === '' ? '空' : realtext.value;
  const content2 =
    file_name.value.trim() === '' ? '無題のタイトル' : file_name.value;

  const blob = new Blob([content], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement('a');

  a.style.display = 'none';
  a.href = url;
  a.download = content2;
  document.body.appendChild(a);

  a.click();

  setTimeout(() => {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 100);
});

btn.addEventListener('mouseenter', function () {
  downbtn.style = 'filter:brightness(70%)';
});

btn.addEventListener('mouseleave', function () {
  downbtn.style = 'filter:brightness(100%)';
});
