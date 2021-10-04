// this js document animates the skillbar in Gustav and Arvids profile. 
//with an incrementing number as the animation plays.
$(document).ready(function () { skillAnimation(); });

function skillAnimation() {
    $(".skill-per").each(function () { //calculates the numbers from 0 to "title" in a transition.
        var $this = $(this);
        var title = $this.attr("title");
        $this.css("width", title + "%");
        $({ animatedValue: 0 }).animate({ animatedValue: title }, {
            duration: 3000,
            step: function () { //calculates up to X9
                $this.attr("title", Math.floor(this.animatedValue) + "%");
            },
            complete: function () {//adds the last
                $this.attr("title", Math.floor(this.animatedValue) + "%");
            },
        })
    })
};

