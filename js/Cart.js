	var app = new Vue({
		el: '#app',
		data: {
			selectAll:false,
			list:[
			{
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
			}
			]
		},
		computed:{
			totalPrice:function(){
				var total = 0;
				for(var i=0; i<this.list.length;i++){
					if(this.list[i].checked){
						total += this.list[i].price * this.list[i].count;
					}
				}
				this.handleAllState();
				return total;
			}

		},
		methods:{
			handleReduce:function(index){
				if(this.list[index].count===1)
					return;
				this.list[index].count--;
			},
			handleAdd:function(index){
				this.list[index].count++;
			},
			handleRemove:function(index){
				this.list.splice(index,1);
			},handelSelectAll:function(){
				if(this.selectAll){
					this.selectAll=false;
					var index;
					for(index=0;index<this.list.length;index++){
						this.list[index].checked = false;
					}
				}else{
					this.selectAll=true;
					var index;
					for(index=0;index<this.list.length;index++){
						this.list[index].checked = true;
					}
				}
			},handleAllState:function(){
				var index;
				for(index=0;index<this.list.length;index++){
					if(this.list[index].checked===false){
						this.selectAll = false;
						return;
					}
				}
				this.selectAll = true;
				return;
			}

		}
	});
