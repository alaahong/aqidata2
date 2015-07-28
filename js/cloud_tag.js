/**
 * Created by alaahong on 2015/7/28.
 */
var myChartCloud = echarts.init(document.getElementById('tag_cloud'));
function createRandomItemStyle() {
    return {
        normal: {
            color: 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
            ].join(',') + ')'
        }
    };
}
option = {
    title: {
        text: '空气质量',
        link: 'http://www.google.com/trends/hottrends'
    },
    tooltip: {
        show: true
    },
    series: [{
        name: '空气质量',
        type: 'wordCloud',
        size: ['50%', '50%'],
        textRotation: [0, 45, 90, -45],
        textPadding: 0,
        autoSize: {
            enable: true,
            minSize: 14
        },
        data: [
            {
                name: "北京",
                value: 86,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "上海",
                value: 168,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "深圳",
                value: 122,
                itemStyle: createRandomItemStyle()
            }
        ]
    }]
};

myChartCloud.setOption(option);