 $.fn.circle_me = function(options) {
               
                var _style = {
                    border: '1px solid #DDD',
                    borderRadius: '50%',
                    display: 'inline-block',
                    height:"200px",
                    width:"200px"
                };
                
                _style = $.extend( _style, options);
                
                return $(this).each(function(){
                            $(this).css(_style);
                            var _bg = $(this).attr('src');
                            $(this).css({"backgroundImage":_bg});
                        });
            }