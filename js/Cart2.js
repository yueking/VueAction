	var app = new Vue({
		el: '#app',
		data: {
			selectAll:false,
			list:[
			[{
				id:1,
				name:'iPhoneX',
				price:7300,
				checked:false,
				count:1
			},
			{
				id:2,
				name:'iPad Pro',
				price:5800,
				checked:false,
				count:1
			},{
				id:3,
				name:'MacBook Pro',
				checked:false,
				price:12000,
				count:1
			}],

			[{
				id:1,
				name:'P1',
				price:100,
				checked:false,
				count:1
			},
			{
				id:2,
				name:'P2',
				price:100,
				checked:false,
				count:1
			},{
				id:3,
				name:'P3',
				checked:false,
				price:100,
				count:1
			}],

			[{
				id:1,
				name:'D1',
				price:200,
				checked:false,
				count:1
			},
			{
				id:2,
				name:'D2',
				price:200,
				checked:false,
				count:1
			},{
				id:3,
				name:'D3',
				checked:false,
				price:200,
				count:1
			}]
			]
		},
		computed:{
			totalPrice:function(){
				var total = 0;
				var i,j;
				for(i=0;i<this.list.length;i++){
					for(j=0;j<this.list[i].length;j++){
						if(this.list[i][j].checked){
							total += this.list[i][j].price * this.list[i][j].count;
						}
					}
				}
				this.handleAllState();
				return total;
			}

		},
		methods:{
			handleReduce:function(idx,index){
				if(this.list[idx][index].count===1)
					return;
				this.list[idx][index].count--;
			},
			handleAdd:function(idx,index){
				this.list[idx][index].count++;
			},
			handleRemove:function(idx,index){
				this.list[idx].splice(index,1);
			},handelSelectAll:function(){
				if(this.selectAll){
					this.selectAll=false;
					var i,j;
					for(i=0;i<this.list.length;i++){
						for(j=0;j<this.list[i].length;j++){
							this.list[i][j].checked = false;
						}
					}
				}else{
					this.selectAll=true;
					var i,j;
					for(i=0;i<this.list.length;i++){
						for(j=0;j<this.list[i].length;j++){
							this.list[i][j].checked = true;
						}
					}
				}

			},handleAllState:function(){
				var i,j;
				for(i=0;i<this.list.length;i++){
					for(j=0;j<this.list[i].length;j++){
						if(this.list[i][j].checked === false){
							this.selectAll = false;
							return;
						}else{
							this.selectAll = true;
						}
					}
				}
				this.selectAll = true;
				return;
			}
		}
	});


// app.$watch('selectAll', function(nval, oval) {
    // alert('计数器值的变化 :' + oval + ' 变为 ' + nval + '!');
// });



