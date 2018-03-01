module.exports = {

  book: {

    assets: './assets',

    css: [
      'coolimages.css'
    ]
  },

  blocks: {
    coolimage: {
      process: function (block) {
        url_image = block.kwargs.url_image;
        textimage = block.body;
        element = '<div class="container">' +
          '<img src="' + url_image + '" alt="Norway" width="500" height="300">' +
          '<div class="imagetext"><tt>' + textimage + '</tt></div>' +
          '</div>' ;

        return element;
      }

    }
  }
};