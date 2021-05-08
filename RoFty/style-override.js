const generateOverride = (params = {}) => {
  let result = ''

  // 正文内容文字大小 - textSize
  if (params.textSize && params.textSize !== '16px') {
    result += `
      .post-detail .post .post-content p {
        font-size: ${params.textSize};
      }
    `
  }

  // 是否显示文章目录
  if (typeof params.openPostToc !== 'undefined' && !params.openPostToc) {
    result += `
      .toc-container {
        display: none;
      }
    `
  }

  if (params.bannerBgImage && params.bannerBgImage !== '') {
    result += `
      .banner{
        background:${params.bannerBgImage}
      }
    `
  }
  if (params.googleFontFamily && params.googleFontFamily != '') {
    result += `
    *{
        ${params.googleFontFamily}
    }
    `
  }


  //日间模式 css变量
  result += `
    html {
      --box-bg-color:${params.contentBgColor};
      --page-bg-color:${params.pageBgColor};
      --title-text-color:${params.titleTextColor};
      --context-text-color:${params.contextTextColor};
      --link-color:${params.linkColor};
      --link-color-hover:${params.linkHoverColor};

      --main-color:${params.mainColor}
  }
  `

  //夜间模式 css变量
  result += `
    html[theme='dark'] {      
      --box-bg-color:${params.contentBgColorDark};
      --page-bg-color:${params.pageBgColorDark};
      --title-text-color:${params.titleTextColorDark};
      --context-text-color:${params.contextTextColorDark};
      --link-color:${params.linkColorDark};
      --link-color-hover:${params.linkHoverColorDark};

      --main-color:${params.mainColorDark}
  }
  `


  if (params.customCss) {
    result += `
      ${params.customCss}
    `
  }


  console.log('result', result)

  return result
}

module.exports = generateOverride
