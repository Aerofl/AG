$(document).ready(function(){
  $('.vid1').hide().fadeIn(800);
  $('.vid2').hide().fadeIn(1200);
  $('.vid3').hide().fadeIn(1600);
  $('.vid-init').on('click', function (evt) {
    var $target = $(evt.currentTarget),
        $video = $('<video controls></div>'),
        $source = $(document.createElement('source')),
        videoSrc = $target.data('src'),
        $this = $(this),
        dynwidth = $(window).width(),
        dynheight = $(window).height();

    evt.preventDefault();

    $this.addClass('checked');

    $source
      .attr('src', videoSrc)
      .attr('type', 'video/mp4');
    $video
      .append($source)
      .addClass('video-js vjs-default-skin reels')
      .attr('preload', 'auto')
      .height(dynheight)
      .width(dynwidth)
      .data('setup', '{"example_operation": true}');
    $video[0].play();
    $('.video-modal').fadeIn("slow");

    $(".video-modal, .close").show();
    $('.video-container').append($video);
    $('.reeltext, .reelgif').hide();
    $('.close').show();
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