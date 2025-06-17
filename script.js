const linkMap = {
  "Work": "https://1kittyka1.github.io/work2grow/",
  "Build": "https://build.com",
  "Read": "https://errorcat404.github.io/read2grow/",
  "Mistakes": "https://shavuha112.github.io/M2G/",
  "Grow": "https://sad12knof.github.io/grow2grow/",
  "Work hard": "https://kst918.github.io/work-hard2grow/",
  "Coding": "https://arsdim.github.io/Test/",
  "Game": "https://vuiacheslav.github.io/game_to_grow/",
  "Act": "https://vov4ik23.github.io/act2grow-/",
  "Dream": "https://nastygrusha31.github.io/Dream2Grow/",
  "Think": "https://godlik48.github.io/Think2Grow/",
  "Live": "https://neswwex.github.io/Live2Grow/",
  "Sport": "https://yarikzxcvbnzxcvbn.github.io/sport2grow/"
};

// Ищем все элементы .dot-label внутри .side-labels
document.querySelectorAll('.side-labels .dot-label').forEach(label => {
  // Находим текст до .dot
  const textNode = Array.from(label.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
  const text = textNode?.textContent.trim();

  if (text && linkMap[text]) {
    const link = document.createElement('a');
    link.href = linkMap[text];
    link.textContent = text;
    link.style.textDecoration = 'none';
    link.style.color = 'inherit';

    // Вставляем ссылку вместо обычного текста
    label.insertBefore(link, textNode);
    label.removeChild(textNode);
  }
});
