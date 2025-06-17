document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.read-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-target');
      const textEl = document.getElementById(id);
      if (!textEl) return;
      const utterance = new SpeechSynthesisUtterance(textEl.innerText);
      speechSynthesis.cancel();
      speechSynthesis.speak(utterance);
    });
  });
});
