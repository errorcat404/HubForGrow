    // Карта текстов и соответствующих ссылок
  const linkMap = {
    "Work": "https://work.com",
    "Build": "https://build.com",
    "Book": "https://book.com",
    "Mistakes": "https://mistakes.com",
    "Grow": "https://grow.com",
    "Work hard": "https://workhard.com",
    "Coding": "https://coding.com",
    "Game": "https://game.com",
    "Act": "https://vov4ik23.github.io/act2grow-/",
    "Dream": "https://dream.com",
    "Think": "https://think.com",
    "Live": "https://live.com"
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