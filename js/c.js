/**
 * Created by alaahong on 2015/7/28.
 */

$('.dropdown-menu li a').click(function () {
    var con = $(this).html();
    var tmp_arr = date_arr[con];
    option.series[0].data["北京"] = tmp_arr[0];
    option.series[0].data["上海"] = tmp_arr[1];
    option.series[0].data["深圳"] = tmp_arr[2];
    myChartCloud.setOption(option);
})