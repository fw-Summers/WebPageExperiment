// 初始化变量
const title = document.getElementById('title');
const paragraphs = document.querySelectorAll('#content p');
const clickToContinue = document.getElementById('click-to-continue');

// 记录当前显示的段落索引，从 0 开始
let currentParagraphIndex = 0;

// 显示标题
title.style.opacity = '1';
title.style.visibility = 'visible';

// 获取页面点击事件
document.body.addEventListener('click', function () {
  // 检查是否还有未显示的段落
  if (currentParagraphIndex < paragraphs.length) {
    const currentParagraph = paragraphs[currentParagraphIndex];
    // 设置段落为可见
    currentParagraph.style.opacity = '1';
    currentParagraph.style.visibility = 'visible';
    // 更新段落索引
    currentParagraphIndex++;

    // 如果是最后一段，则隐藏提示
    if (currentParagraphIndex === paragraphs.length) {
      clickToContinue.style.display = 'none';
    }
  }
});
