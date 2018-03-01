module.exports = {

  book: {

    assets: './assets',

    css: [
      'coolimages.css'
    ]
  },

  blocks: {
    coolimages_type1: {
      process: function (block) {
        url_image = block.kwargs.url_image;
        textimage = block.body;
        element = '<div class="container">';
        element += '<img class="coolimage" src="' + url_image + '" alt="Norway" width="500" height="300">';
        element += '<div class="imagetext_type1"><tt>' + textimage + '</tt></div>';
        element += '</div>';

        return element;
      }
    },
    coolimages_type2: {
      process: function (block) {
        url_image = block.kwargs.url_image;
        textimage = block.body;
        element = '<div class="container">';
        element += '<img class="coolimage" src="' + url_image + '" alt="Norway" width="500" height="300">';
        element += '<div class="imagetext_type2"><tt>' + textimage + '</tt></div>';
        element += '</div>';

        return element;
      }
    }
  }
};