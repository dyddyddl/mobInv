function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("복사되었습니다: " + text);
  });
}
