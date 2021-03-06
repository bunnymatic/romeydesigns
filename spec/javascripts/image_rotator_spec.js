describe('image rotator jquery plugin', function() {
  beforeEach(function() {
    loadFixtures('image_rotator.html');
  });
  describe('init', function() {
    beforeEach(function() {
      $('.images_container').imageRotator({imageContainer:'.blurp'});
    });
    it('puts settings in the data field of element it was called on', function() {
      expect($('.images_container').data()).toEqual({imageUrls: [], imageContainer:'.blurp', delayMillisec:5000, fadeDuration: 500});

    });
    it('manages separate settings for separate instances', function() {
      $('.images_container2').imageRotator({imageContainer:'.blop'});
      expect($('.images_container').data().imageContainer).toEqual('.blurp');
      expect($('.images_container2').data().imageContainer).toEqual('.blop');
    });
  });
});