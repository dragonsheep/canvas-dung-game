// JavaScript Document
/*
********************************************* SOUND
*/
var sound=(function (that,who,num){
	var url='BGM/'+who+'/touch/vo_na_00'+num+'_006'+(Math.floor(Math.random()*3)+2)+'.ogg';
	console.log(who,num);
	
	function play(){
		console.log('GGG');	
	}
	
})

/*
********************************************* CANVAS
*/
var canvas = document.getElementById('canvas');
var cgt=canvas.getContext('2d');
var run0=document.getElementById('run0');
var run1=document.getElementById('run1');
var run2=document.getElementById('run2');
var run3=document.getElementById('run3');
var backsrc=document.getElementById('back');
var floorsrc=document.getElementById('floor');
var src=['img/umi(0).png','img/umi(1).png','img/umi(2).png'];

var z=3;
var h=canvas.height,w=canvas.width; 
var e=20;//石頭數量
var rx=-100;//石頭出生點 -右 +左
var frh=50;//地板高度
var masterh=150;masterw=120;//建議 5:4
var core=0;//分數
var jumpf=h-masterh-frh+20,jumph=200,jumpn=5,jumpup=0,jumpx=3.5*z;//起始位置 跳躍高度 位置 狀態 跳躍力 
var ajump=false;
var mostw=120,mosth=96,mosty=h-mostw-20,mostx=[w],moste=40;//怪物長 寬 Y軸 X軸
//['honoka','eil','kotori','umi','maki','hozomi','rin','hanayo','nico'];
var fps=61,vwfps=0,dfps=0;//畫偵數,即時累積畫偵數,記錄一秒鐘畫偵數
var xy=[0,10],movex=core*sp,movenum=0;
var sp=3*z;//速度
var mapv=[0,0,(w*5),(w*4),0];
var UCV,UNUM;
var voiout=true;
var seerun=0;
$(document).ready(function(e) {
	
});
var restart=(function(){
	 z=3;
	 h=canvas.height,w=canvas.width; 
	 e=20;//石頭數量
	 rx=-100;//石頭出生點 -右 +左
	 frh=50;//地板高度
	 masterh=150;masterw=120;//建議 5:4
	 core=0;//分數
	 jumpf=h-masterh-frh+20,jumph=200,jumpn=5,jumpup=0,jumpx=3.5*z;//起始位置 跳躍高度 位置 狀態 跳躍力 
	 ajump=false;
	 mostw=120,mosth=96,mosty=h-mostw-20,mostx=[w],moste=40;//怪物長 寬 Y軸 X軸
	 xy=[0,10],movex=core*sp,movenum=0;
	 $('.over').hide();
	 $('#GG *').slideDown('fast');
	 seerun=0;
})
var jump=(function(CV,num){
	
})
var μs=(function(num){
	us=['ho','el','ko','um','ri','ma','no','ha','ni'];
	touch=[];	
		for(i=0;i<9;i++){
			us[i]=[];
				for(j=1;j<9;j++){
						us[i].push('vo_na_00'+(i+1)+'_003'+j+'.ogg');	
				}
			}
			return	us[num][Math.floor(Math.random()*8)];		
})
var μsd=(function(num){
	uss=['ho','el','ko','um','ri','ma','no','ha','ni'];
	touch=[];	
		for(i=0;i<9;i++){
			uss[i]=[];
				for(j=2;j<6;j++){
					uss[i].push('vo_na_00'+(i+1)+'_006'+j+'.ogg');	
				}
			}
			return	uss[num][Math.floor(Math.random()*3)];		
})
function padleft(str,len){
	str=''+str;
	if(str.length>=len){
		return str;
	}
	else{
		return padleft("0"+str,len);	
	}
}
var cored=(function(){
		
		clear=setTimeout(cored,10);
		seerun++;
		$('#number').html(padleft(seerun,6));
		if(seerun>=core){
			clearTimeout(clear);
			$('#other').attr('loop',false);
		}
})
var goup=(function(){
	vr=['ho','el','ko','um','ri','ma','no','ha','ni'];
	for(i=0;i<9;i++){
			vr[i]=['vo_li_00'+(i+1)+'_0009.ogg'];
	}
	//console.log(UNUM,vr[UNUM])
	if(voiout==true){
		$('#Voice').attr('src','BGM/'+UCV+'/'+vr[UNUM]);
		voiout=false;	
		setTimeout(voiopen,750);
	}
	})
var Voi=(function(CV,num){
		UCV=CV;UNUM=num;
		console.log(num,UNUM)
		if(voiout==true){
			$('#Voice').attr('src','BGM/'+CV+'/touch/'+μs(num));
			voiout=false;	
			setTimeout(voiopen,2000);
		}
		
	})
var Void=(function(CV,num){
		UCV=CV;UNUM=num;
		console.log(num,UNUM)
		if(voiout==true){
			$('#Voice').attr('src','BGM/'+CV+'/down/'+μsd(num));
			voiout=false;	
			setTimeout(voiopen,2000);
		}
		
	})	
var voiopen=(function(){
	voiout=true;	
})	
var touched=(function (){
		$('#cover').animate('background: #fff',500,function (){
			$('#cover').slideUp('slow');
			$('#MBGM').attr('src','BGM/title_bgm.mp3');
			$('#MBGM').trigger('play');	
			$('#MBGM').prop('volume',0.5);
			$('#GG').show(200);	
		});
});
function BGM1(song){
	$('#MBGM').attr('src',song);
	$('#MBGM').trigger('play');	
}
function BGM3(song){
	$('#other').attr('src',song);
	$('#other').trigger('play');	
}
function start(name,num){
	$('#other').attr('src','BGM/BGM/海未のセクシー ・ドレス.ogg');
	$('#other').trigger('play');	
	BGM1("BGM/BGM/夏色えがおで1,2,Jump!.ogg");
	
	$('#MBGM').prop('volume',0.75);	
	UCV=name;UNUM=num;
	run0=new Image();run1=new Image();run2=new Image();run3=new Image();
	run0.src='img/'+name+'/'+name+'(0).png';
	run1.src='img/'+name+'/'+name+'(1).png';
	run2.src='img/'+name+'/'+name+'(2).png';
	run3.src='img/'+name+'/'+name+'(3).png';
	
	isee=setInterval('see()',1000);
	setmoster();
	ttvs=setInterval('tt()',1000/fps);
	$('.master,.load').hide();	
}
function tt(){//function 控制器
	cgt.clearRect(0,0,w,h);
	backed();
	map();
	mas();
	z=z+0.005;
	//fler();line();
	font();know();
		if(mostx[xy[1]]-core*sp<-50){
			xy[0]=xy[0]+10;
			xy[1]=xy[1]+10;
			setmoster();
		}
		//console.log(mostx[movenum],(core*sp+masterw-45))
		
		//console.log(movenum);
		
		if(mostx[movenum]<(core*sp+masterw-moste) && jumpn<mosty+moste*0.85-jumpf || mostx[movenum]+mostw<(core*sp+masterw-moste) && jumpn<mosty+moste*0.85-jumpf  ){
			if(movenum%10!=0 || movenum==0){
				$('#other').attr('src','BGM/BGM/肉屋のにこちゃん.ogg');
				$('#other').trigger('play');
				$('#MBGM').prop('volume',0.3);	
				//console.log('GAME OVER',mostx[movenum],(core*sp+masterw-40),mostx[movenum]+mostw,(core*sp+masterw-40))
				clearInterval(ttvs);
				clearInterval(isee);
				$('.over').slideDown('slow');
				BGM1("BGM/BGM/藤澤慶昌 - すぐ先にある未来.ogg");
				BGM3('BGM/BGM/renpin.wav');
				$('#other').attr('loop','true');
				cored();
				//alert('GAME OVER');
			}
				
		}
		if(mostx[movenum]+mostw<(core*sp+masterw-moste)){
				//console.log(mostx[movenum]+mostw,(core*sp+masterw-moste),mostx[movenum]+mostw<(core*sp+masterw-moste));
				movenum++;
		}
		
		//console.log(mostx[movenum],(core*sp+masterw-40));
		
		//console.log(jumpn,mosty+moste-jumpf);
		
		
	//	console.log(mostx[xy[1]-1]-core*sp);
		//console.log(xy,mostx[mostx.length-1]-core*sp-w);
}
function setmoster(){// 怪物設置器
	for(i=xy[0];i<xy[1];i++){
		if(i==xy[0]){
			mostx[i]=mostx[i]+w;
		}
		mostx.push(mostx[i]+Math.floor(Math.random()*600+400));
	}
}
function most(i,j){// 放置怪物器
	images=new Image();
	images.src='img/'+i+'.png';
	cgt.drawImage(images,mostx[j]-core*sp,mosty,mostw,mosth);
	//cgt.fillStyle="#CCCCCC";
	
	//cgt.fillRect(mostx[j]-core*sp+moste*0.5,mosty+moste,mostw-(moste),mosth-moste);
	//console.log(mosty+moste-jumpf);
	//console.log(j);
}
function know(){ 
	for(i=xy[0];i<xy[1];i++){
			most(i%9+1,i);// 怪物放置	
	}	
}
function beta(){
	if(vwfps<=fps){
			vwfps++;
			//tt();
			bea=setTimeout('beta()',1000/fps);
	}
	else{
		clearTimeout(bea);
		vwfps=0;
		beta();
	}
}
function see(){
		beta();
		dfps=vwfps;	
}
$(document).keydown(function(e) {
    if(e.keyCode==38 || e.keyCode==32){//控制按鍵
		ajump=true;
		goup();
	}
	if(e.keyCode==40){
		 jumpup=1;
		 jumpx=15;
	}
	
});
function fly(){
		ajump=true;
		goup();
}

function font(){//文字
	cgt.font="20px 微軟正黑體";
	cgt.fillText('FPS:'+dfps,(w-300),30);
	
	core++;
	cgt.font="20px 微軟正黑體";
	cgt.fillText("分數:"+core,(w-200),30);	
}
function mas(){//飛越
	if(ajump==true){
		if(jumpup==0 && jumph>jumpn){
			jumpu();
		}
		else if(jumpn>=jumph && jumpup==0){
			jumpup=1;
		}
		else if(jumpup==1 && jumpn>0){
			jumpd();
		}
		else{
			jumpup=0;
			ajump=false;
			jumpn=5;
		}
		cgt.drawImage(run0,0,jumpf-jumpn,masterw,masterh);	
		
	}
	else{//動作
		if(vwfps>50){
			cgt.drawImage(run3,0,jumpf-jumpn,masterw,masterh);	
		}
		else if(vwfps>40){
			cgt.drawImage(run2,0,jumpf-jumpn,masterw,masterh);
		}
		else if(vwfps>30){
			cgt.drawImage(run1,0,jumpf-jumpn,masterw,masterh);
		}
		else if(vwfps>20){
			cgt.drawImage(run3,0,jumpf-jumpn,masterw,masterh);
		}
		else if(vwfps>10){
			cgt.drawImage(run1,0,jumpf-jumpn,masterw,masterh);
		}
		else{
			cgt.drawImage(run0,0,jumpf-jumpn,masterw,masterh);	
		}
	}
}
function jumpu(){// BUG 區 重力 要改 上
	if(jumph*0.5>jumpn){
		return jumpn=jumpn+jumpx;
	}
	else if(jumph*0.65>jumpn){
		return jumpn=jumpn+jumpx*0.9;
	}
	else if(jumph*0.75>jumpn){
		return jumpn=jumpn+jumpx*0.7;
	}
	else if(jumph*0.9>jumpn){
		return jumpn=jumpn+jumpx*0.4;
	}
	else{
		return jumpn=jumpn+jumpx*0.3;
	}
}
function jumpd(){// BUG 區 重力 要改 上
	if(jumph*0.5>jumpn){
		return jumpn=jumpn-jumpx;
	}
	else if(jumph*0.65>jumpn){
		return jumpn=jumpn-jumpx*0.9;
	}
	else if(jumph*0.75>jumpn){
		return jumpn=jumpn-jumpx*0.6;
	}
	else if(jumph*0.9>jumpn){
		return jumpn=jumpn-jumpx*0.4;
	}
	else{
		return jumpn=jumpn-jumpx*1;
	}
}
function map(){
	
}
/*
var rockl=[],rockw=[],rockx=[],rocky=[];
function line(){
	for(i=0;i<e;i++){
		rockl.push(0+Math.random()*30);//間距
		
		rockw.push(0+Math.random()*10);//長度
	
		rockx.push(0+Math.random()*w);//出現點
	
		rocky.push(20+Math.random()*15);//出現高度
	}
}
var dw=0,dh=0;

function fler(){//地板我要改掉~~~ 醜畢了
	for(i=0;i<e;i++){
		rockx[i]=rockx[i]+sp;
				cgt.beginPath();
				a=cgt.moveTo(w-rockl[i]-rockx[i]-rx-rockw[i],h-rocky[i]);
				b=cgt.lineTo(w-rockl[i]-rockx[i]-rx,h-rocky[i]);
				cgt.stroke();
		if(rockx[i]>800){
			rockx[i]=rx;
		}
	}
}
*/
function backed(){
		mapv[0]=mapv[0]-sp*1.2;mapv[1]=mapv[1]-sp;
		mapv[2]=mapv[2]-sp*1.2;mapv[3]=mapv[3]-sp;
		cgt.drawImage(backsrc,mapv[0],0,w*5,h);
		cgt.drawImage(backsrc,mapv[2],0,w*5+10,h);
		cgt.drawImage(floorsrc,mapv[1],h-frh,w*4+10,frh);
		cgt.drawImage(floorsrc,mapv[3]-5,h-frh,w*4+20,frh);
		//console.log(w*5,Math.abs(mapv[0]))
		
	if(Math.abs(mapv[0])>=w*5){
		mapv[0]=w*5;
	}
	if(Math.abs(mapv[2])>=w*5){
		mapv[2]=w*5;
	}
	if(Math.abs(mapv[1])>=w*4){
		mapv[1]=w*4;	
	}
	if(Math.abs(mapv[3])>=w*4){
		mapv[3]=w*4;	
	}
	//console.log(Math.abs(mapv[1]),w*4)
}
function test(){
	cgt.clearRect(0,h-30,w,30);
	cgt.beginPath()
	dw=dw+30;
	a=cgt.moveTo(50+dw,h-20);
	b=cgt.lineTo(70+dw,h-20);
	//cgt.save();
	cgt.stroke();
	cgt.restore();
	
}
