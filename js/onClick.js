$(document).ready(function(){
  $('.vid-init').on('click', function (evt) {
    var $target = $(evt.currentTarget),
        $video = $('<video controls></div>'),
        $source = $(document.createElement('source')),
        videoSrc = $target.data('src'),
        $this = $(this)

    evt.preventDefault();

    $this.addClass('checked');

    $source
      .attr('src', videoSrc)
      .attr('type', 'video/mp4');
    $video
      .append($source)
      .addClass('video-js vjs-default-skin corporate')
      .attr('preload', 'auto')
      .attr('width', 600)
      .attr('height', 250)
      .data('setup', '{"example_operation": true}')

    $(".video-modal").show();
    $('.video-container').append($video);
    $('.reeltext, .reelgif').hide();
  });
  $('.video-modal').on('click', function (evt) {
    var $target = $(evt.target),
        $vidInit = $('.vid-init');

    if ($target.hasClass('video-modal') || $target.parent().hasClass('video-modal')) {
      $('.video-modal .video-js').remove();
      $('.reeltext, .reelgif').show();
      $vidInit.removeClass('checked');
      $('input:checked').prop('checked', false);
      $(this).hide();
    }

  });
});
