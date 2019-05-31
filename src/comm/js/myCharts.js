/**
 * 各种画echarts图表的方法都封装在这里
 * 注意：这里echarts没有采用按需引入的方式，只是为了方便学习
 */

import echarts from 'echarts'
const install = function(Vue) {
    Object.defineProperties(Vue.prototype, {
        $chart: {
            get() {
                return {
                    //饼图
                    line1: function (id) {
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();

                        const option = {
                        	"backgroundColor": '#ffffff',
                        	"title": {
						        text: '分布占比'
						    },
						    "color": ["#68cffe", "#49a1fe", "#65c233", "#f2b71d", "#9600e2", "#e73f60", "#9f9f9f"],
						    "legend": {
						        "bottom": 0,
						        "itemGap": 10,
						        "itemWidth": 12,
						        "itemHeight": 12,
						        "data": ["广东", "湖南", "广西", "湖北", "江西", "河南"],
						        "symbolKeepAspect": false,
						        "textStyle": {
						            "color": "#57a6ff"
						        },											
						        "icon": "circle"
						    },
						    "grid": {
						        "top": "5%",
						        "left": "5%",
						        "right": "5%",
						        "bottom": "5%",
						        "containLabel": true
						    },
						    "series": [{
						        "name": "",
						        "type": "pie",
						        "radius": ["45%", "70%"],
						        "center": ["45%", "45%"],
						        "label": {
						            "color": "#57a6ff",
						            "formatter": "{b}：{c}%"
						        },
						        "itemStyle": {
						            "normal": {
						                "shadowColor": "rgba(0,0,0,0.4)",
						                "shadowBlur": 15
						            }
						        },
						        "labelLine": {
						            "lineStyle": {
						                "color": "#57a6ff",
						                "width": 1.5
						            }
						        },
						        "data": [{
						            "name": "广东",
						            "value": 10
						        }, {
						            "name": "湖南",
						            "value": 20
						        }, {
						            "name": "广西",
						            "value": 30
						        }, {
						            "name": "湖北",
						            "value": 20
						        }, {
						            "name": "江西",
						            "value": 10
						        }, {
						            "name": "河南",
						            "value": 10
						        }]
						    }]
						};

                        this.chart.setOption(option);			
                    },
                    
                    line2: function (id) {
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();
					
                        const option = {
                        	backgroundColor: '#ffffff',
						    title: {
						        text: '2016年12月长宁区合规成本分析'
						    },
						    tooltip: {
						        trigger: 'axis',
						        axisPointer: { // 坐标轴指示器，坐标轴触发有效
						            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						        }
						    },
						    legend: {
						        data: ['包租费', '装修费', '保洁费', '物业费'],
						        align: 'right',
						        right: 10
						    },
						    grid: {
						        left: '3%',
						        right: '4%',
						        bottom: '3%',
						        containLabel: true
						    },
						    xAxis: [{
						        type: 'category',
						        data: ['新虹桥', '中山公园', '虹桥', '镇宁路', '天山古北']
						    }],
						    yAxis: [{
						        type: 'value',
						        name: '总价(万元)',
						        axisLabel: {
						            formatter: '{value}'
						        }
						    }],
						    series: [{
						        name: '包租费',
						        type: 'bar',
						        data: [20, 12, 31, 34, 31]
						    }, {
						        name: '装修费',
						        type: 'bar',
						        data: [10, 20, 5, 9, 3]
						    }, {
						        name: '保洁费',
						        type: 'bar',
						        data: [1, 1, 2, 3, 1]
						    }, {
						        name: '物业费',
						        type: 'bar',
						        data: [0.1, 2, 3, 1, 0.5]
						    }]
						};

                        this.chart.setOption(option);			
                    }
                }
            }
        }
    })
}

export default {
    install
}
