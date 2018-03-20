module.exports = {

  website: {
    assets: './assets',
    css: [
      'coolimages.css'
    ]
  },
  ebook: {
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
        prefixtext_default = "Img:";
        prefixtext = block.kwargs.prefixtext || prefixtext_default ;
        element = '<div class="container-coolimage">';
        element += '<img class="coolimage" src="' + url_image + '" alt="Imagen no Localizada">';
        element += '<div class="imagetext_type1"><i>' + prefixtext + '</i> <tt>' + textimage + '</tt></div>';
        element += '</div>';

        return element;
      }
    },
    coolimages_type2: {
      process: function (block) {
        url_image = block.kwargs.url_image;
        textimage = block.body;
        prefixtext_default = "Img:";
        prefixtext = block.kwargs.prefixtext || prefixtext_default;
        element = '<div class="container">';
        element += '<img class="coolimage" src="' + url_image + '" alt="Imagen no Localizada">';
        element += '<div class="imagetext_type2"><i>' + prefixtext + '</i> <tt>' + textimage + '</tt></div>';
        element += '</div>';

        return element;
      }
    }
  }
};