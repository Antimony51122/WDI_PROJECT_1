$(document).keydown(function(e) {
  if (e.which === this.keyMatch['up']) {
    if ((this.newLiUp.attr('class') !== 'w')
    && (this.newLiUp.attr('class') !== 'b')) {
      this.moveUpNext();
      this.pickSword();
    } else if ((this.newLiUp.attr('class') !== 'w')
    && (this.newLiUp.attr('class') === 'b')
    && (this.newLiUpAbove.attr('class') !== 'w')
    && (this.newLiUpAbove.attr('class') !== 'b')
    && (this.newLiUpAbove.attr('class') !== 's')
    && (this.newLiUpAbove.attr('class') !== 'g')) {
      this.pushUpNext();
      this.pickSword();
    }
  }
});
