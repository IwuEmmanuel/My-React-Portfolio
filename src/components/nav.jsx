import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


export default function Nav(){
    return <script>
            $(document).ready(function () {

		    var $window = $(window);

		    function checkWindowWidth() {
		    	
		        var windowsize = $window.width();

		        if (windowsize > 1000) {

		            $('#navbar').css('display','block');

		        } else {

		            $('#navbar').css('display','none');

		        }
		    }

		    checkWindowWidth();

		    $(window).resize(checkWindowWidth);

		});


      $('#navbar-btn').click(function() {
        $('#navbar').toggle();
      });
        </script>
     
}