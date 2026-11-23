(()=>{var EE=0,Eh=1,dE=2;var Xl=1,kc=2,Pi=3,Xi=0,Pe=1,ki=2;var $i=0,Li=1,jr=2,dh=3,fh=4,fE=5,un=100,_E=101,mE=102,_h=103,mh=104,pE=200,QE=201,xE=202,gE=203,Za=204,Aa=205,ME=206,yE=207,OE=208,SE=209,vE=210,PE=211,kE=212,wE=213,IE=214,zE=0,GE=1,RE=2,Kr=3,WE=4,ZE=5,AE=6,TE=7,Dl=0,FE=1,bE=2,Ji=0,CE=1,UE=2,VE=3,wc=4,NE=5,jE=6;var Bl=300,Xn=301,Dn=302,Ta=303,Fa=304,vo=306,ba=1e3,ai=1001,zs=1002,Re=1003,ph=1004;var Xo=1005;var De=1006,KE=1007;var Gs=1008;var Yi=1009,HE=1010,qE=1011,Ic=1012,tu=1013,Hi=1014,qi=1015,Rs=1016,eu=1017,iu=1018,fn=1020,$E=1021,ci=1023,LE=1024,JE=1025,_n=1026,Bn=1027,YE=1028,nu=1029,XE=1030,su=1031,ru=1033,Do=33776,Bo=33777,ta=33778,ea=33779,Qh=35840,xh=35841,gh=35842,Mh=35843,ou=36196,yh=37492,Oh=37496,Sh=37808,vh=37809,Ph=37810,kh=37811,wh=37812,Ih=37813,zh=37814,Gh=37815,Rh=37816,Wh=37817,Zh=37818,Ah=37819,Th=37820,Fh=37821,ia=36492,bh=36494,Ch=36495,DE=36283,Uh=36284,Vh=36285,Nh=36286;var Hr=2300,qr=2301,na=2302,jh=2400,Kh=2401,Hh=2402;var au=3e3,mn=3001,BE=3200,td=3201,cu=0,ed=1,Be="",le="srgb",Ii="srgb-linear",zc="display-p3",Po="display-p3-linear",$r="linear",ee="srgb",Lr="rec709",Jr="p3";var In=7680;var qh=519,id=512,nd=513,sd=514,hu=515,rd=516,od=517,ad=518,cd=519,$h=35044;var Lh="300 es",Ca=1035,wi=2e3,Yr=2001,Di=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Nr=Math.PI/180,Ua=180/Math.PI;function rs(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]).toLowerCase()}function Me(n,t,e){return Math.max(t,Math.min(e,n))}function hd(n,t){return(n%t+t)%t}function sa(n,t,e){return(1-e)*n+e*t}function Jh(n){return(n&n-1)===0&&n!==0}function Va(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ps(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function be(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ut=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qt=class n{constructor(t,e,i,s,r,a,o,c,h){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,h)}set(t,e,i,s,r,a,o,c,h){let l=this.elements;return l[0]=t,l[1]=s,l[2]=o,l[3]=e,l[4]=r,l[5]=c,l[6]=i,l[7]=a,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],h=i[1],l=i[4],u=i[7],E=i[2],_=i[5],m=i[8],p=s[0],f=s[3],d=s[6],O=s[1],x=s[4],v=s[7],R=s[2],w=s[5],I=s[8];return r[0]=a*p+o*O+c*R,r[3]=a*f+o*x+c*w,r[6]=a*d+o*v+c*I,r[1]=h*p+l*O+u*R,r[4]=h*f+l*x+u*w,r[7]=h*d+l*v+u*I,r[2]=E*p+_*O+m*R,r[5]=E*f+_*x+m*w,r[8]=E*d+_*v+m*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8];return e*a*l-e*o*h-i*r*l+i*o*c+s*r*h-s*a*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8],u=l*a-o*h,E=o*c-l*r,_=h*r-a*c,m=e*u+i*E+s*_;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let p=1/m;return t[0]=u*p,t[1]=(s*h-l*i)*p,t[2]=(o*i-s*a)*p,t[3]=E*p,t[4]=(l*e-s*c)*p,t[5]=(s*r-o*e)*p,t[6]=_*p,t[7]=(i*c-h*e)*p,t[8]=(a*e-i*r)*p,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let c=Math.cos(r),h=Math.sin(r);return this.set(i*c,i*h,-i*(c*a+h*o)+a+t,-s*h,s*c,-s*(-h*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ra.makeScale(t,e)),this}rotate(t){return this.premultiply(ra.makeRotation(-t)),this}translate(t,e){return this.premultiply(ra.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ra=new qt;function lu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ws(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ld(){let n=Ws("canvas");return n.style.display="block",n}var Yh={};function vs(n){n in Yh||(Yh[n]=!0,console.warn(n))}var Xh=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dh=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),hr={[Ii]:{transfer:$r,primaries:Lr,toReference:n=>n,fromReference:n=>n},[le]:{transfer:ee,primaries:Lr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Po]:{transfer:$r,primaries:Jr,toReference:n=>n.applyMatrix3(Dh),fromReference:n=>n.applyMatrix3(Xh)},[zc]:{transfer:ee,primaries:Jr,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Dh),fromReference:n=>n.applyMatrix3(Xh).convertLinearToSRGB()}},ud=new Set([Ii,Po]),Yt={enabled:!0,_workingColorSpace:Ii,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!ud.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;let i=hr[t].toReference,s=hr[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return hr[n].primaries},getTransfer:function(n){return n===Be?$r:hr[n].transfer}};function Jn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function oa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var zn,Xr=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{zn===void 0&&(zn=Ws("canvas")),zn.width=t.width,zn.height=t.height;let i=zn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=zn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ws("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Jn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Jn(e[i]/255)*255):e[i]=Jn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ed=0,Dr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=rs(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(aa(s[a].image)):r.push(aa(s[a]))}else r=aa(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function aa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Xr.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var dd=0,$e=class n extends Di{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=ai,s=ai,r=De,a=Gs,o=ci,c=Yi,h=n.DEFAULT_ANISOTROPY,l=Be){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=rs(),this.name="",this.source=new Dr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof l=="string"?this.colorSpace=l:(vs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=l===mn?le:Be),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ba:t.x=t.x-Math.floor(t.x);break;case ai:t.x=t.x<0?0:1;break;case zs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ba:t.y=t.y-Math.floor(t.y);break;case ai:t.y=t.y<0?0:1;break;case zs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return vs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===le?mn:au}set encoding(t){vs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===mn?le:Be}};$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=Bl;$e.DEFAULT_ANISOTROPY=1;var se=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,h=c[0],l=c[4],u=c[8],E=c[1],_=c[5],m=c[9],p=c[2],f=c[6],d=c[10];if(Math.abs(l-E)<.01&&Math.abs(u-p)<.01&&Math.abs(m-f)<.01){if(Math.abs(l+E)<.1&&Math.abs(u+p)<.1&&Math.abs(m+f)<.1&&Math.abs(h+_+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(h+1)/2,v=(_+1)/2,R=(d+1)/2,w=(l+E)/4,I=(u+p)/4,$=(m+f)/4;return x>v&&x>R?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=w/i,r=I/i):v>R?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=w/s,r=$/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=I/r,s=$/r),this.set(i,s,r,e),this}let O=Math.sqrt((f-m)*(f-m)+(u-p)*(u-p)+(E-l)*(E-l));return Math.abs(O)<.001&&(O=1),this.x=(f-m)/O,this.y=(u-p)/O,this.z=(E-l)/O,this.w=Math.acos((h+_+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Na=class extends Di{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);let s={width:t,height:e,depth:1};i.encoding!==void 0&&(vs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===mn?le:Be),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:De,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new $e(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Dr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},zi=class extends Na{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Br=class extends $e{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ja=class extends $e{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bi=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],h=i[s+1],l=i[s+2],u=i[s+3],E=r[a+0],_=r[a+1],m=r[a+2],p=r[a+3];if(o===0){t[e+0]=c,t[e+1]=h,t[e+2]=l,t[e+3]=u;return}if(o===1){t[e+0]=E,t[e+1]=_,t[e+2]=m,t[e+3]=p;return}if(u!==p||c!==E||h!==_||l!==m){let f=1-o,d=c*E+h*_+l*m+u*p,O=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){let R=Math.sqrt(x),w=Math.atan2(R,d*O);f=Math.sin(f*w)/R,o=Math.sin(o*w)/R}let v=o*O;if(c=c*f+E*v,h=h*f+_*v,l=l*f+m*v,u=u*f+p*v,f===1-o){let R=1/Math.sqrt(c*c+h*h+l*l+u*u);c*=R,h*=R,l*=R,u*=R}}t[e]=c,t[e+1]=h,t[e+2]=l,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],c=i[s+1],h=i[s+2],l=i[s+3],u=r[a],E=r[a+1],_=r[a+2],m=r[a+3];return t[e]=o*m+l*u+c*_-h*E,t[e+1]=c*m+l*E+h*u-o*_,t[e+2]=h*m+l*_+o*E-c*u,t[e+3]=l*m-o*u-c*E-h*_,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,h=o(i/2),l=o(s/2),u=o(r/2),E=c(i/2),_=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=E*l*u+h*_*m,this._y=h*_*u-E*l*m,this._z=h*l*m+E*_*u,this._w=h*l*u-E*_*m;break;case"YXZ":this._x=E*l*u+h*_*m,this._y=h*_*u-E*l*m,this._z=h*l*m-E*_*u,this._w=h*l*u+E*_*m;break;case"ZXY":this._x=E*l*u-h*_*m,this._y=h*_*u+E*l*m,this._z=h*l*m+E*_*u,this._w=h*l*u-E*_*m;break;case"ZYX":this._x=E*l*u-h*_*m,this._y=h*_*u+E*l*m,this._z=h*l*m-E*_*u,this._w=h*l*u+E*_*m;break;case"YZX":this._x=E*l*u+h*_*m,this._y=h*_*u+E*l*m,this._z=h*l*m-E*_*u,this._w=h*l*u-E*_*m;break;case"XZY":this._x=E*l*u-h*_*m,this._y=h*_*u-E*l*m,this._z=h*l*m+E*_*u,this._w=h*l*u+E*_*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],h=e[2],l=e[6],u=e[10],E=i+o+u;if(E>0){let _=.5/Math.sqrt(E+1);this._w=.25/_,this._x=(l-c)*_,this._y=(r-h)*_,this._z=(a-s)*_}else if(i>o&&i>u){let _=2*Math.sqrt(1+i-o-u);this._w=(l-c)/_,this._x=.25*_,this._y=(s+a)/_,this._z=(r+h)/_}else if(o>u){let _=2*Math.sqrt(1+o-i-u);this._w=(r-h)/_,this._x=(s+a)/_,this._y=.25*_,this._z=(c+l)/_}else{let _=2*Math.sqrt(1+u-i-o);this._w=(a-s)/_,this._x=(r+h)/_,this._y=(c+l)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,h=e._z,l=e._w;return this._x=i*l+a*o+s*h-r*c,this._y=s*l+a*c+r*o-i*h,this._z=r*l+a*h+i*c-s*o,this._w=a*l-i*o-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let _=1-e;return this._w=_*a+e*this._w,this._x=_*i+e*this._x,this._y=_*s+e*this._y,this._z=_*r+e*this._z,this.normalize(),this}let h=Math.sqrt(c),l=Math.atan2(h,o),u=Math.sin((1-e)*l)/h,E=Math.sin(e*l)/h;return this._w=a*u+this._w*E,this._x=i*u+this._x*E,this._y=s*u+this._y*E,this._z=r*u+this._z*E,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,h=2*(a*s-o*i),l=2*(o*e-r*s),u=2*(r*i-a*e);return this.x=e+c*h+a*u-o*l,this.y=i+c*l+o*h-r*u,this.z=s+c*u+r*l-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ca.copy(this).projectOnVector(t),this.sub(ca)}reflect(t){return this.sub(ca.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ca=new z,Bh=new Bi,Gi=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ni):ni.fromBufferAttribute(r,a),ni.applyMatrix4(t.matrixWorld),this.expandByPoint(ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lr.copy(i.boundingBox)),lr.applyMatrix4(t.matrixWorld),this.union(lr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ni),ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qs),ur.subVectors(this.max,Qs),Gn.subVectors(t.a,Qs),Rn.subVectors(t.b,Qs),Wn.subVectors(t.c,Qs),Ui.subVectors(Rn,Gn),Vi.subVectors(Wn,Rn),on.subVectors(Gn,Wn);let e=[0,-Ui.z,Ui.y,0,-Vi.z,Vi.y,0,-on.z,on.y,Ui.z,0,-Ui.x,Vi.z,0,-Vi.x,on.z,0,-on.x,-Ui.y,Ui.x,0,-Vi.y,Vi.x,0,-on.y,on.x,0];return!ha(e,Gn,Rn,Wn,ur)||(e=[1,0,0,0,1,0,0,0,1],!ha(e,Gn,Rn,Wn,ur))?!1:(Er.crossVectors(Ui,Vi),e=[Er.x,Er.y,Er.z],ha(e,Gn,Rn,Wn,ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Mi=[new z,new z,new z,new z,new z,new z,new z,new z],ni=new z,lr=new Gi,Gn=new z,Rn=new z,Wn=new z,Ui=new z,Vi=new z,on=new z,Qs=new z,ur=new z,Er=new z,an=new z;function ha(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){an.fromArray(n,r);let o=s.x*Math.abs(an.x)+s.y*Math.abs(an.y)+s.z*Math.abs(an.z),c=t.dot(an),h=e.dot(an),l=i.dot(an);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>o)return!1}return!0}var fd=new Gi,xs=new z,la=new z,Ri=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):fd.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xs.subVectors(t,this.center);let e=xs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(xs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(la.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xs.copy(t.center).add(la)),this.expandByPoint(xs.copy(t.center).sub(la))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},yi=new z,ua=new z,dr=new z,Ni=new z,Ea=new z,fr=new z,da=new z,ts=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=yi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yi.copy(this.origin).addScaledVector(this.direction,e),yi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ua.copy(t).add(e).multiplyScalar(.5),dr.copy(e).sub(t).normalize(),Ni.copy(this.origin).sub(ua);let r=t.distanceTo(e)*.5,a=-this.direction.dot(dr),o=Ni.dot(this.direction),c=-Ni.dot(dr),h=Ni.lengthSq(),l=Math.abs(1-a*a),u,E,_,m;if(l>0)if(u=a*c-o,E=a*o-c,m=r*l,u>=0)if(E>=-m)if(E<=m){let p=1/l;u*=p,E*=p,_=u*(u+a*E+2*o)+E*(a*u+E+2*c)+h}else E=r,u=Math.max(0,-(a*E+o)),_=-u*u+E*(E+2*c)+h;else E=-r,u=Math.max(0,-(a*E+o)),_=-u*u+E*(E+2*c)+h;else E<=-m?(u=Math.max(0,-(-a*r+o)),E=u>0?-r:Math.min(Math.max(-r,-c),r),_=-u*u+E*(E+2*c)+h):E<=m?(u=0,E=Math.min(Math.max(-r,-c),r),_=E*(E+2*c)+h):(u=Math.max(0,-(a*r+o)),E=u>0?r:Math.min(Math.max(-r,-c),r),_=-u*u+E*(E+2*c)+h);else E=a>0?-r:r,u=Math.max(0,-(a*E+o)),_=-u*u+E*(E+2*c)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ua).addScaledVector(dr,E),_}intersectSphere(t,e){yi.subVectors(t.center,this.origin);let i=yi.dot(this.direction),s=yi.dot(yi)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c,h=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,E=this.origin;return h>=0?(i=(t.min.x-E.x)*h,s=(t.max.x-E.x)*h):(i=(t.max.x-E.x)*h,s=(t.min.x-E.x)*h),l>=0?(r=(t.min.y-E.y)*l,a=(t.max.y-E.y)*l):(r=(t.max.y-E.y)*l,a=(t.min.y-E.y)*l),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-E.z)*u,c=(t.max.z-E.z)*u):(o=(t.max.z-E.z)*u,c=(t.min.z-E.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,yi)!==null}intersectTriangle(t,e,i,s,r){Ea.subVectors(e,t),fr.subVectors(i,t),da.crossVectors(Ea,fr);let a=this.direction.dot(da),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ni.subVectors(this.origin,t);let c=o*this.direction.dot(fr.crossVectors(Ni,fr));if(c<0)return null;let h=o*this.direction.dot(Ea.cross(Ni));if(h<0||c+h>a)return null;let l=-o*Ni.dot(da);return l<0?null:this.at(l/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ie=class n{constructor(t,e,i,s,r,a,o,c,h,l,u,E,_,m,p,f){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,h,l,u,E,_,m,p,f)}set(t,e,i,s,r,a,o,c,h,l,u,E,_,m,p,f){let d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=h,d[6]=l,d[10]=u,d[14]=E,d[3]=_,d[7]=m,d[11]=p,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Zn.setFromMatrixColumn(t,0).length(),r=1/Zn.setFromMatrixColumn(t,1).length(),a=1/Zn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),h=Math.sin(s),l=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let E=a*l,_=a*u,m=o*l,p=o*u;e[0]=c*l,e[4]=-c*u,e[8]=h,e[1]=_+m*h,e[5]=E-p*h,e[9]=-o*c,e[2]=p-E*h,e[6]=m+_*h,e[10]=a*c}else if(t.order==="YXZ"){let E=c*l,_=c*u,m=h*l,p=h*u;e[0]=E+p*o,e[4]=m*o-_,e[8]=a*h,e[1]=a*u,e[5]=a*l,e[9]=-o,e[2]=_*o-m,e[6]=p+E*o,e[10]=a*c}else if(t.order==="ZXY"){let E=c*l,_=c*u,m=h*l,p=h*u;e[0]=E-p*o,e[4]=-a*u,e[8]=m+_*o,e[1]=_+m*o,e[5]=a*l,e[9]=p-E*o,e[2]=-a*h,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let E=a*l,_=a*u,m=o*l,p=o*u;e[0]=c*l,e[4]=m*h-_,e[8]=E*h+p,e[1]=c*u,e[5]=p*h+E,e[9]=_*h-m,e[2]=-h,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let E=a*c,_=a*h,m=o*c,p=o*h;e[0]=c*l,e[4]=p-E*u,e[8]=m*u+_,e[1]=u,e[5]=a*l,e[9]=-o*l,e[2]=-h*l,e[6]=_*u+m,e[10]=E-p*u}else if(t.order==="XZY"){let E=a*c,_=a*h,m=o*c,p=o*h;e[0]=c*l,e[4]=-u,e[8]=h*l,e[1]=E*u+p,e[5]=a*l,e[9]=_*u-m,e[2]=m*u-_,e[6]=o*l,e[10]=p*u+E}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_d,t,md)}lookAt(t,e,i){let s=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),ji.crossVectors(i,He),ji.lengthSq()===0&&(Math.abs(i.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),ji.crossVectors(i,He)),ji.normalize(),_r.crossVectors(He,ji),s[0]=ji.x,s[4]=_r.x,s[8]=He.x,s[1]=ji.y,s[5]=_r.y,s[9]=He.y,s[2]=ji.z,s[6]=_r.z,s[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],h=i[12],l=i[1],u=i[5],E=i[9],_=i[13],m=i[2],p=i[6],f=i[10],d=i[14],O=i[3],x=i[7],v=i[11],R=i[15],w=s[0],I=s[4],$=s[8],y=s[12],S=s[1],C=s[5],it=s[9],rt=s[13],W=s[2],b=s[6],K=s[10],X=s[14],J=s[3],q=s[7],B=s[11],nt=s[15];return r[0]=a*w+o*S+c*W+h*J,r[4]=a*I+o*C+c*b+h*q,r[8]=a*$+o*it+c*K+h*B,r[12]=a*y+o*rt+c*X+h*nt,r[1]=l*w+u*S+E*W+_*J,r[5]=l*I+u*C+E*b+_*q,r[9]=l*$+u*it+E*K+_*B,r[13]=l*y+u*rt+E*X+_*nt,r[2]=m*w+p*S+f*W+d*J,r[6]=m*I+p*C+f*b+d*q,r[10]=m*$+p*it+f*K+d*B,r[14]=m*y+p*rt+f*X+d*nt,r[3]=O*w+x*S+v*W+R*J,r[7]=O*I+x*C+v*b+R*q,r[11]=O*$+x*it+v*K+R*B,r[15]=O*y+x*rt+v*X+R*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],h=t[13],l=t[2],u=t[6],E=t[10],_=t[14],m=t[3],p=t[7],f=t[11],d=t[15];return m*(+r*c*u-s*h*u-r*o*E+i*h*E+s*o*_-i*c*_)+p*(+e*c*_-e*h*E+r*a*E-s*a*_+s*h*l-r*c*l)+f*(+e*h*u-e*o*_-r*a*u+i*a*_+r*o*l-i*h*l)+d*(-s*o*l-e*c*u+e*o*E+s*a*u-i*a*E+i*c*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8],u=t[9],E=t[10],_=t[11],m=t[12],p=t[13],f=t[14],d=t[15],O=u*f*h-p*E*h+p*c*_-o*f*_-u*c*d+o*E*d,x=m*E*h-l*f*h-m*c*_+a*f*_+l*c*d-a*E*d,v=l*p*h-m*u*h+m*o*_-a*p*_-l*o*d+a*u*d,R=m*u*c-l*p*c-m*o*E+a*p*E+l*o*f-a*u*f,w=e*O+i*x+s*v+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/w;return t[0]=O*I,t[1]=(p*E*r-u*f*r-p*s*_+i*f*_+u*s*d-i*E*d)*I,t[2]=(o*f*r-p*c*r+p*s*h-i*f*h-o*s*d+i*c*d)*I,t[3]=(u*c*r-o*E*r-u*s*h+i*E*h+o*s*_-i*c*_)*I,t[4]=x*I,t[5]=(l*f*r-m*E*r+m*s*_-e*f*_-l*s*d+e*E*d)*I,t[6]=(m*c*r-a*f*r-m*s*h+e*f*h+a*s*d-e*c*d)*I,t[7]=(a*E*r-l*c*r+l*s*h-e*E*h-a*s*_+e*c*_)*I,t[8]=v*I,t[9]=(m*u*r-l*p*r-m*i*_+e*p*_+l*i*d-e*u*d)*I,t[10]=(a*p*r-m*o*r+m*i*h-e*p*h-a*i*d+e*o*d)*I,t[11]=(l*o*r-a*u*r-l*i*h+e*u*h+a*i*_-e*o*_)*I,t[12]=R*I,t[13]=(l*p*s-m*u*s+m*i*E-e*p*E-l*i*f+e*u*f)*I,t[14]=(m*o*s-a*p*s-m*i*c+e*p*c+a*i*f-e*o*f)*I,t[15]=(a*u*s-l*o*s+l*i*c-e*u*c-a*i*E+e*o*E)*I,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,h=r*a,l=r*o;return this.set(h*a+i,h*o-s*c,h*c+s*o,0,h*o+s*c,l*o+i,l*c-s*a,0,h*c-s*o,l*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,h=r+r,l=a+a,u=o+o,E=r*h,_=r*l,m=r*u,p=a*l,f=a*u,d=o*u,O=c*h,x=c*l,v=c*u,R=i.x,w=i.y,I=i.z;return s[0]=(1-(p+d))*R,s[1]=(_+v)*R,s[2]=(m-x)*R,s[3]=0,s[4]=(_-v)*w,s[5]=(1-(E+d))*w,s[6]=(f+O)*w,s[7]=0,s[8]=(m+x)*I,s[9]=(f-O)*I,s[10]=(1-(E+p))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Zn.set(s[0],s[1],s[2]).length(),a=Zn.set(s[4],s[5],s[6]).length(),o=Zn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],si.copy(this);let h=1/r,l=1/a,u=1/o;return si.elements[0]*=h,si.elements[1]*=h,si.elements[2]*=h,si.elements[4]*=l,si.elements[5]*=l,si.elements[6]*=l,si.elements[8]*=u,si.elements[9]*=u,si.elements[10]*=u,e.setFromRotationMatrix(si),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=wi){let c=this.elements,h=2*r/(e-t),l=2*r/(i-s),u=(e+t)/(e-t),E=(i+s)/(i-s),_,m;if(o===wi)_=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Yr)_=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=l,c[9]=E,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=wi){let c=this.elements,h=1/(e-t),l=1/(i-s),u=1/(a-r),E=(e+t)*h,_=(i+s)*l,m,p;if(o===wi)m=(a+r)*u,p=-2*u;else if(o===Yr)m=r*u,p=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-E,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-_,c[2]=0,c[6]=0,c[10]=p,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Zn=new z,si=new ie,_d=new z(0,0,0),md=new z(1,1,1),ji=new z,_r=new z,He=new z,tl=new ie,el=new Bi,to=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],h=s[5],l=s[9],u=s[2],E=s[6],_=s[10];switch(e){case"XYZ":this._y=Math.asin(Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,_),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(E,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Me(E,-1,1)),Math.abs(E)<.9999999?(this._y=Math.atan2(-u,_),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(E,_),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(E,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-l,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return tl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return el.setFromEuler(this),this.setFromQuaternion(el,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};to.DEFAULT_ORDER="XYZ";var Zs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},pd=0,il=new z,An=new Bi,Oi=new ie,mr=new z,gs=new z,Qd=new z,xd=new Bi,nl=new z(1,0,0),sl=new z(0,1,0),rl=new z(0,0,1),gd={type:"added"},Md={type:"removed"},fe=class n extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new z,e=new to,i=new Bi,s=new z(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new qt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return An.setFromAxisAngle(t,e),this.quaternion.multiply(An),this}rotateOnWorldAxis(t,e){return An.setFromAxisAngle(t,e),this.quaternion.premultiply(An),this}rotateX(t){return this.rotateOnAxis(nl,t)}rotateY(t){return this.rotateOnAxis(sl,t)}rotateZ(t){return this.rotateOnAxis(rl,t)}translateOnAxis(t,e){return il.copy(t).applyQuaternion(this.quaternion),this.position.add(il.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nl,t)}translateY(t){return this.translateOnAxis(sl,t)}translateZ(t){return this.translateOnAxis(rl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?mr.copy(t):mr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(gs,mr,this.up):Oi.lookAt(mr,gs,this.up),this.quaternion.setFromRotationMatrix(Oi),s&&(Oi.extractRotation(s.matrixWorld),An.setFromRotationMatrix(Oi),this.quaternion.premultiply(An.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(gd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Md)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Oi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,t,Qd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,xd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++){let r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){let u=c[h];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),h=a(t.textures),l=a(t.images),u=a(t.shapes),E=a(t.skeletons),_=a(t.animations),m=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),h.length>0&&(i.textures=h),l.length>0&&(i.images=l),u.length>0&&(i.shapes=u),E.length>0&&(i.skeletons=E),_.length>0&&(i.animations=_),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(o){let c=[];for(let h in o){let l=o[h];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};fe.DEFAULT_UP=new z(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ri=new z,Si=new z,fa=new z,vi=new z,Tn=new z,Fn=new z,ol=new z,_a=new z,ma=new z,pa=new z,pr=!1,dn=class n{constructor(t=new z,e=new z,i=new z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ri.subVectors(t,e),s.cross(ri);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ri.subVectors(s,e),Si.subVectors(i,e),fa.subVectors(t,e);let a=ri.dot(ri),o=ri.dot(Si),c=ri.dot(fa),h=Si.dot(Si),l=Si.dot(fa),u=a*h-o*o;if(u===0)return r.set(0,0,0),null;let E=1/u,_=(h*c-o*l)*E,m=(a*l-o*c)*E;return r.set(1-_-m,m,_)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getUV(t,e,i,s,r,a,o,c){return pr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),pr=!0),this.getInterpolation(t,e,i,s,r,a,o,c)}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vi.x),c.addScaledVector(a,vi.y),c.addScaledVector(o,vi.z),c)}static isFrontFacing(t,e,i,s){return ri.subVectors(i,e),Si.subVectors(t,e),ri.cross(Si).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ri.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),ri.cross(Si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return pr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),pr=!0),n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Tn.subVectors(s,i),Fn.subVectors(r,i),_a.subVectors(t,i);let c=Tn.dot(_a),h=Fn.dot(_a);if(c<=0&&h<=0)return e.copy(i);ma.subVectors(t,s);let l=Tn.dot(ma),u=Fn.dot(ma);if(l>=0&&u<=l)return e.copy(s);let E=c*u-l*h;if(E<=0&&c>=0&&l<=0)return a=c/(c-l),e.copy(i).addScaledVector(Tn,a);pa.subVectors(t,r);let _=Tn.dot(pa),m=Fn.dot(pa);if(m>=0&&_<=m)return e.copy(r);let p=_*h-c*m;if(p<=0&&h>=0&&m<=0)return o=h/(h-m),e.copy(i).addScaledVector(Fn,o);let f=l*m-_*u;if(f<=0&&u-l>=0&&_-m>=0)return ol.subVectors(r,s),o=(u-l)/(u-l+(_-m)),e.copy(s).addScaledVector(ol,o);let d=1/(f+p+E);return a=p*d,o=E*d,e.copy(i).addScaledVector(Tn,a).addScaledVector(Fn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function Qa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var vt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Yt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Yt.workingColorSpace){if(t=hd(t,1),e=Me(e,0,1),i=Me(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Qa(a,r,t+1/3),this.g=Qa(a,r,t),this.b=Qa(a,r,t-1/3)}return Yt.toWorkingColorSpace(this,s),this}setStyle(t,e=le){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=le){let i=uu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}copyLinearToSRGB(t){return this.r=oa(t.r),this.g=oa(t.g),this.b=oa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=le){return Yt.fromWorkingColorSpace(Se.copy(this),t),Math.round(Me(Se.r*255,0,255))*65536+Math.round(Me(Se.g*255,0,255))*256+Math.round(Me(Se.b*255,0,255))}getHexString(t=le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Se.copy(this),e);let i=Se.r,s=Se.g,r=Se.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,h,l=(o+a)/2;if(o===a)c=0,h=0;else{let u=a-o;switch(h=l<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=h,t.l=l,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Se.copy(this),e),t.r=Se.r,t.g=Se.g,t.b=Se.b,t}getStyle(t=le){Yt.fromWorkingColorSpace(Se.copy(this),t);let e=Se.r,i=Se.g,s=Se.b;return t!==le?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ki),this.setHSL(Ki.h+t,Ki.s+e,Ki.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ki),t.getHSL(Qr);let i=sa(Ki.h,Qr.h,e),s=sa(Ki.s,Qr.s,e),r=sa(Ki.l,Qr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Se=new vt;vt.NAMES=uu;var yd=0,di=class extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=Li,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Za,this.blendDst=Aa,this.blendEquation=un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=In,this.stencilZFail=In,this.stencilZPass=In,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(i.blending=this.blending),this.side!==Xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Za&&(i.blendSrc=this.blendSrc),this.blendDst!==Aa&&(i.blendDst=this.blendDst),this.blendEquation!==un&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Kr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==In&&(i.stencilFail=this.stencilFail),this.stencilZFail!==In&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==In&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},_e=class extends di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var de=new z,xr=new ut,We=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=$h,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)xr.fromBufferAttribute(this,e),xr.applyMatrix3(t),this.setXY(e,xr.x,xr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ps(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=be(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ps(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ps(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ps(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ps(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array),s=be(s,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$h&&(t.usage=this.usage),t}};var eo=class extends We{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var io=class extends We{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ae=class extends We{constructor(t,e,i){super(new Float32Array(t),e,i)}};var Od=0,Xe=new ie,xa=new fe,bn=new z,qe=new Gi,Ms=new Gi,ge=new z,ke=class n extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lu(t)?io:eo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new qt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,i){return Xe.makeTranslation(t,e,i),this.applyMatrix4(Xe),this}scale(t,e,i){return Xe.makeScale(t,e,i),this.applyMatrix4(Xe),this}lookAt(t){return xa.lookAt(t),xa.updateMatrix(),this.applyMatrix4(xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bn).negate(),this.translate(bn.x,bn.y,bn.z),this}setFromPoints(t){let e=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(t){let i=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ms.setFromBufferAttribute(o),this.morphTargetsRelative?(ge.addVectors(qe.min,Ms.min),qe.expandByPoint(ge),ge.addVectors(qe.max,Ms.max),qe.expandByPoint(ge)):(qe.expandByPoint(Ms.min),qe.expandByPoint(Ms.max))}qe.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)ge.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ge));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let h=0,l=o.count;h<l;h++)ge.fromBufferAttribute(o,h),c&&(bn.fromBufferAttribute(t,h),ge.add(bn)),s=Math.max(s,i.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,h=[],l=[];for(let S=0;S<o;S++)h[S]=new z,l[S]=new z;let u=new z,E=new z,_=new z,m=new ut,p=new ut,f=new ut,d=new z,O=new z;function x(S,C,it){u.fromArray(s,S*3),E.fromArray(s,C*3),_.fromArray(s,it*3),m.fromArray(a,S*2),p.fromArray(a,C*2),f.fromArray(a,it*2),E.sub(u),_.sub(u),p.sub(m),f.sub(m);let rt=1/(p.x*f.y-f.x*p.y);isFinite(rt)&&(d.copy(E).multiplyScalar(f.y).addScaledVector(_,-p.y).multiplyScalar(rt),O.copy(_).multiplyScalar(p.x).addScaledVector(E,-f.x).multiplyScalar(rt),h[S].add(d),h[C].add(d),h[it].add(d),l[S].add(O),l[C].add(O),l[it].add(O))}let v=this.groups;v.length===0&&(v=[{start:0,count:i.length}]);for(let S=0,C=v.length;S<C;++S){let it=v[S],rt=it.start,W=it.count;for(let b=rt,K=rt+W;b<K;b+=3)x(i[b+0],i[b+1],i[b+2])}let R=new z,w=new z,I=new z,$=new z;function y(S){I.fromArray(r,S*3),$.copy(I);let C=h[S];R.copy(C),R.sub(I.multiplyScalar(I.dot(C))).normalize(),w.crossVectors($,C);let rt=w.dot(l[S])<0?-1:1;c[S*4]=R.x,c[S*4+1]=R.y,c[S*4+2]=R.z,c[S*4+3]=rt}for(let S=0,C=v.length;S<C;++S){let it=v[S],rt=it.start,W=it.count;for(let b=rt,K=rt+W;b<K;b+=3)y(i[b+0]),y(i[b+1]),y(i[b+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let E=0,_=i.count;E<_;E++)i.setXYZ(E,0,0,0);let s=new z,r=new z,a=new z,o=new z,c=new z,h=new z,l=new z,u=new z;if(t)for(let E=0,_=t.count;E<_;E+=3){let m=t.getX(E+0),p=t.getX(E+1),f=t.getX(E+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,p),a.fromBufferAttribute(e,f),l.subVectors(a,r),u.subVectors(s,r),l.cross(u),o.fromBufferAttribute(i,m),c.fromBufferAttribute(i,p),h.fromBufferAttribute(i,f),o.add(l),c.add(l),h.add(l),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(p,c.x,c.y,c.z),i.setXYZ(f,h.x,h.y,h.z)}else for(let E=0,_=e.count;E<_;E+=3)s.fromBufferAttribute(e,E+0),r.fromBufferAttribute(e,E+1),a.fromBufferAttribute(e,E+2),l.subVectors(a,r),u.subVectors(s,r),l.cross(u),i.setXYZ(E+0,l.x,l.y,l.z),i.setXYZ(E+1,l.x,l.y,l.z),i.setXYZ(E+2,l.x,l.y,l.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(o,c){let h=o.array,l=o.itemSize,u=o.normalized,E=new h.constructor(c.length*l),_=0,m=0;for(let p=0,f=c.length;p<f;p++){o.isInterleavedBufferAttribute?_=c[p]*o.data.stride+o.offset:_=c[p]*l;for(let d=0;d<l;d++)E[m++]=h[_++]}return new We(E,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],h=t(c,i);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let c=[],h=r[o];for(let l=0,u=h.length;l<u;l++){let E=h[l],_=t(E,i);c.push(_)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let h=i[c];t.data.attributes[c]=h.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],l=[];for(let u=0,E=h.length;u<E;u++){let _=h[u];l.push(_.toJSON(t.data))}l.length>0&&(s[c]=l,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let h in s){let l=s[h];this.setAttribute(h,l.clone(e))}let r=t.morphAttributes;for(let h in r){let l=[],u=r[h];for(let E=0,_=u.length;E<_;E++)l.push(u[E].clone(e));this.morphAttributes[h]=l}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,l=a.length;h<l;h++){let u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},al=new ie,cn=new ts,gr=new Ri,cl=new z,Cn=new z,Un=new z,Vn=new z,ga=new z,Mr=new z,yr=new ut,Or=new ut,Sr=new ut,hl=new z,ll=new z,ul=new z,vr=new z,Pr=new z,Gt=class extends fe{constructor(t=new ke,e=new _e){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Mr.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let l=o[c],u=r[c];l!==0&&(ga.fromBufferAttribute(u,t),a?Mr.addScaledVector(ga,l):Mr.addScaledVector(ga.sub(e),l))}e.add(Mr)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere),gr.applyMatrix4(r),cn.copy(t.ray).recast(t.near),!(gr.containsPoint(cn.origin)===!1&&(cn.intersectSphere(gr,cl)===null||cn.origin.distanceToSquared(cl)>(t.far-t.near)**2))&&(al.copy(r).invert(),cn.copy(t.ray).applyMatrix4(al),!(i.boundingBox!==null&&cn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,cn)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,l=r.attributes.uv1,u=r.attributes.normal,E=r.groups,_=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,p=E.length;m<p;m++){let f=E[m],d=a[f.materialIndex],O=Math.max(f.start,_.start),x=Math.min(o.count,Math.min(f.start+f.count,_.start+_.count));for(let v=O,R=x;v<R;v+=3){let w=o.getX(v),I=o.getX(v+1),$=o.getX(v+2);s=kr(this,d,t,i,h,l,u,w,I,$),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let m=Math.max(0,_.start),p=Math.min(o.count,_.start+_.count);for(let f=m,d=p;f<d;f+=3){let O=o.getX(f),x=o.getX(f+1),v=o.getX(f+2);s=kr(this,a,t,i,h,l,u,O,x,v),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,p=E.length;m<p;m++){let f=E[m],d=a[f.materialIndex],O=Math.max(f.start,_.start),x=Math.min(c.count,Math.min(f.start+f.count,_.start+_.count));for(let v=O,R=x;v<R;v+=3){let w=v,I=v+1,$=v+2;s=kr(this,d,t,i,h,l,u,w,I,$),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let m=Math.max(0,_.start),p=Math.min(c.count,_.start+_.count);for(let f=m,d=p;f<d;f+=3){let O=f,x=f+1,v=f+2;s=kr(this,a,t,i,h,l,u,O,x,v),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function Sd(n,t,e,i,s,r,a,o){let c;if(t.side===Pe?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===Xi,o),c===null)return null;Pr.copy(o),Pr.applyMatrix4(n.matrixWorld);let h=e.ray.origin.distanceTo(Pr);return h<e.near||h>e.far?null:{distance:h,point:Pr.clone(),object:n}}function kr(n,t,e,i,s,r,a,o,c,h){n.getVertexPosition(o,Cn),n.getVertexPosition(c,Un),n.getVertexPosition(h,Vn);let l=Sd(n,t,e,i,Cn,Un,Vn,vr);if(l){s&&(yr.fromBufferAttribute(s,o),Or.fromBufferAttribute(s,c),Sr.fromBufferAttribute(s,h),l.uv=dn.getInterpolation(vr,Cn,Un,Vn,yr,Or,Sr,new ut)),r&&(yr.fromBufferAttribute(r,o),Or.fromBufferAttribute(r,c),Sr.fromBufferAttribute(r,h),l.uv1=dn.getInterpolation(vr,Cn,Un,Vn,yr,Or,Sr,new ut),l.uv2=l.uv1),a&&(hl.fromBufferAttribute(a,o),ll.fromBufferAttribute(a,c),ul.fromBufferAttribute(a,h),l.normal=dn.getInterpolation(vr,Cn,Un,Vn,hl,ll,ul,new z),l.normal.dot(i.direction)>0&&l.normal.multiplyScalar(-1));let u={a:o,b:c,c:h,normal:new z,materialIndex:0};dn.getNormal(Cn,Un,Vn,u.normal),l.face=u}return l}var Ue=class n extends ke{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],h=[],l=[],u=[],E=0,_=0;m("z","y","x",-1,-1,i,e,t,a,r,0),m("z","y","x",1,-1,i,e,-t,a,r,1),m("x","z","y",1,1,t,i,e,s,a,2),m("x","z","y",1,-1,t,i,-e,s,a,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new ae(h,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(u,2));function m(p,f,d,O,x,v,R,w,I,$,y){let S=v/I,C=R/$,it=v/2,rt=R/2,W=w/2,b=I+1,K=$+1,X=0,J=0,q=new z;for(let B=0;B<K;B++){let nt=B*C-rt;for(let ft=0;ft<b;ft++){let j=ft*S-it;q[p]=j*O,q[f]=nt*x,q[d]=W,h.push(q.x,q.y,q.z),q[p]=0,q[f]=0,q[d]=w>0?1:-1,l.push(q.x,q.y,q.z),u.push(ft/I),u.push(1-B/$),X+=1}}for(let B=0;B<$;B++)for(let nt=0;nt<I;nt++){let ft=E+nt+b*B,j=E+nt+b*(B+1),et=E+(nt+1)+b*(B+1),Et=E+(nt+1)+b*B;c.push(ft,j,Et),c.push(j,et,Et),J+=6}o.addGroup(_,J,y),_+=J,E+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function es(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ge(n){let t={};for(let e=0;e<n.length;e++){let i=es(n[e]);for(let s in i)t[s]=i[s]}return t}function vd(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Eu(n){return n.getRenderTarget()===null?n.outputColorSpace:Yt.workingColorSpace}var Pd={clone:es,merge:Ge},kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Wi=class extends di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kd,this.fragmentShader=wd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=es(t.uniforms),this.uniformsGroups=vd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},no=class extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=wi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ve=class extends no{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ua*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ua*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Nr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/h,s*=a.width/c,i*=a.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Nn=-90,jn=1,Ka=class extends fe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ve(Nn,jn,t,e);s.layers=this.layers,this.add(s);let r=new ve(Nn,jn,t,e);r.layers=this.layers,this.add(r);let a=new ve(Nn,jn,t,e);a.layers=this.layers,this.add(a);let o=new ve(Nn,jn,t,e);o.layers=this.layers,this.add(o);let c=new ve(Nn,jn,t,e);c.layers=this.layers,this.add(c);let h=new ve(Nn,jn,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(let h of e)this.remove(h);if(t===wi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Yr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,h,l]=this.children,u=t.getRenderTarget(),E=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,h),i.texture.generateMipmaps=p,t.setRenderTarget(i,5,s),t.render(e,l),t.setRenderTarget(u,E,_),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},so=class extends $e{constructor(t,e,i,s,r,a,o,c,h,l){t=t!==void 0?t:[],e=e!==void 0?e:Xn,super(t,e,i,s,r,a,o,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ha=class extends zi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(vs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===mn?le:Be),this.texture=new so(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:De}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ue(5,5,5),r=new Wi({name:"CubemapFromEquirect",uniforms:es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pe,blending:$i});r.uniforms.tEquirect.value=e;let a=new Gt(s,r),o=e.minFilter;return e.minFilter===Gs&&(e.minFilter=De),new Ka(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},Ma=new z,Id=new z,zd=new qt,oi=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Ma.subVectors(i,e).cross(Id.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Ma),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||zd.getNormalMatrix(t),s=this.coplanarPoint(Ma).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},hn=new Ri,wr=new z,As=class{constructor(t=new oi,e=new oi,i=new oi,s=new oi,r=new oi,a=new oi){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=wi){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],h=s[4],l=s[5],u=s[6],E=s[7],_=s[8],m=s[9],p=s[10],f=s[11],d=s[12],O=s[13],x=s[14],v=s[15];if(i[0].setComponents(c-r,E-h,f-_,v-d).normalize(),i[1].setComponents(c+r,E+h,f+_,v+d).normalize(),i[2].setComponents(c+a,E+l,f+m,v+O).normalize(),i[3].setComponents(c-a,E-l,f-m,v-O).normalize(),i[4].setComponents(c-o,E-u,f-p,v-x).normalize(),e===wi)i[5].setComponents(c+o,E+u,f+p,v+x).normalize();else if(e===Yr)i[5].setComponents(o,u,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hn)}intersectsSprite(t){return hn.center.set(0,0,0),hn.radius=.7071067811865476,hn.applyMatrix4(t.matrixWorld),this.intersectsSphere(hn)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(wr.x=s.normal.x>0?t.max.x:t.min.x,wr.y=s.normal.y>0?t.max.y:t.min.y,wr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(wr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function du(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Gd(n,t){let e=t.isWebGL2,i=new WeakMap;function s(h,l){let u=h.array,E=h.usage,_=u.byteLength,m=n.createBuffer();n.bindBuffer(l,m),n.bufferData(l,u,E),h.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(e)p=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,l,u){let E=l.array,_=l._updateRange,m=l.updateRanges;if(n.bindBuffer(u,h),_.count===-1&&m.length===0&&n.bufferSubData(u,0,E),m.length!==0){for(let p=0,f=m.length;p<f;p++){let d=m[p];e?n.bufferSubData(u,d.start*E.BYTES_PER_ELEMENT,E,d.start,d.count):n.bufferSubData(u,d.start*E.BYTES_PER_ELEMENT,E.subarray(d.start,d.start+d.count))}l.clearUpdateRanges()}_.count!==-1&&(e?n.bufferSubData(u,_.offset*E.BYTES_PER_ELEMENT,E,_.offset,_.count):n.bufferSubData(u,_.offset*E.BYTES_PER_ELEMENT,E.subarray(_.offset,_.offset+_.count)),_.count=-1),l.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);let l=i.get(h);l&&(n.deleteBuffer(l.buffer),i.delete(h))}function c(h,l){if(h.isGLBufferAttribute){let E=i.get(h);(!E||E.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);let u=i.get(h);if(u===void 0)i.set(h,s(h,l));else if(u.version<h.version){if(u.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,h,l),u.version=h.version}}return{get:a,remove:o,update:c}}var fi=class n extends ke{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),h=o+1,l=c+1,u=t/o,E=e/c,_=[],m=[],p=[],f=[];for(let d=0;d<l;d++){let O=d*E-a;for(let x=0;x<h;x++){let v=x*u-r;m.push(v,-O,0),p.push(0,0,1),f.push(x/o),f.push(1-d/c)}}for(let d=0;d<c;d++)for(let O=0;O<o;O++){let x=O+h*d,v=O+h*(d+1),R=O+1+h*(d+1),w=O+1+h*d;_.push(x,v,w),_.push(v,R,w)}this.setIndex(_),this.setAttribute("position",new ae(m,3)),this.setAttribute("normal",new ae(p,3)),this.setAttribute("uv",new ae(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Rd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ad=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Td=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Fd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ud=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Nd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ef=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,af=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hf="gl_FragColor = linearToOutputTexel( gl_FragColor );",lf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,uf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ef=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,df=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ff=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_f=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Of=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Pf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,If=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Rf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Af=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ff=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Uf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$f=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Lf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Jf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Yf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Df=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,e_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,i_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,n_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,r_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,o_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,a_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,c_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,u_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,d_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,f_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,__=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,m_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,p_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Q_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,x_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,g_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,M_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,y_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,S_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,P_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,k_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,w_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,I_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,G_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,R_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,C_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,U_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,V_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,N_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,H_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,X_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,B_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,em=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,im=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,om=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,am=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,um=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ut={alphahash_fragment:Rd,alphahash_pars_fragment:Wd,alphamap_fragment:Zd,alphamap_pars_fragment:Ad,alphatest_fragment:Td,alphatest_pars_fragment:Fd,aomap_fragment:bd,aomap_pars_fragment:Cd,batching_pars_vertex:Ud,batching_vertex:Vd,begin_vertex:Nd,beginnormal_vertex:jd,bsdfs:Kd,iridescence_fragment:Hd,bumpmap_pars_fragment:qd,clipping_planes_fragment:$d,clipping_planes_pars_fragment:Ld,clipping_planes_pars_vertex:Jd,clipping_planes_vertex:Yd,color_fragment:Xd,color_pars_fragment:Dd,color_pars_vertex:Bd,color_vertex:tf,common:ef,cube_uv_reflection_fragment:nf,defaultnormal_vertex:sf,displacementmap_pars_vertex:rf,displacementmap_vertex:of,emissivemap_fragment:af,emissivemap_pars_fragment:cf,colorspace_fragment:hf,colorspace_pars_fragment:lf,envmap_fragment:uf,envmap_common_pars_fragment:Ef,envmap_pars_fragment:df,envmap_pars_vertex:ff,envmap_physical_pars_fragment:Pf,envmap_vertex:_f,fog_vertex:mf,fog_pars_vertex:pf,fog_fragment:Qf,fog_pars_fragment:xf,gradientmap_pars_fragment:gf,lightmap_fragment:Mf,lightmap_pars_fragment:yf,lights_lambert_fragment:Of,lights_lambert_pars_fragment:Sf,lights_pars_begin:vf,lights_toon_fragment:kf,lights_toon_pars_fragment:wf,lights_phong_fragment:If,lights_phong_pars_fragment:zf,lights_physical_fragment:Gf,lights_physical_pars_fragment:Rf,lights_fragment_begin:Wf,lights_fragment_maps:Zf,lights_fragment_end:Af,logdepthbuf_fragment:Tf,logdepthbuf_pars_fragment:Ff,logdepthbuf_pars_vertex:bf,logdepthbuf_vertex:Cf,map_fragment:Uf,map_pars_fragment:Vf,map_particle_fragment:Nf,map_particle_pars_fragment:jf,metalnessmap_fragment:Kf,metalnessmap_pars_fragment:Hf,morphcolor_vertex:qf,morphnormal_vertex:$f,morphtarget_pars_vertex:Lf,morphtarget_vertex:Jf,normal_fragment_begin:Yf,normal_fragment_maps:Xf,normal_pars_fragment:Df,normal_pars_vertex:Bf,normal_vertex:t_,normalmap_pars_fragment:e_,clearcoat_normal_fragment_begin:i_,clearcoat_normal_fragment_maps:n_,clearcoat_pars_fragment:s_,iridescence_pars_fragment:r_,opaque_fragment:o_,packing:a_,premultiplied_alpha_fragment:c_,project_vertex:h_,dithering_fragment:l_,dithering_pars_fragment:u_,roughnessmap_fragment:E_,roughnessmap_pars_fragment:d_,shadowmap_pars_fragment:f_,shadowmap_pars_vertex:__,shadowmap_vertex:m_,shadowmask_pars_fragment:p_,skinbase_vertex:Q_,skinning_pars_vertex:x_,skinning_vertex:g_,skinnormal_vertex:M_,specularmap_fragment:y_,specularmap_pars_fragment:O_,tonemapping_fragment:S_,tonemapping_pars_fragment:v_,transmission_fragment:P_,transmission_pars_fragment:k_,uv_pars_fragment:w_,uv_pars_vertex:I_,uv_vertex:z_,worldpos_vertex:G_,background_vert:R_,background_frag:W_,backgroundCube_vert:Z_,backgroundCube_frag:A_,cube_vert:T_,cube_frag:F_,depth_vert:b_,depth_frag:C_,distanceRGBA_vert:U_,distanceRGBA_frag:V_,equirect_vert:N_,equirect_frag:j_,linedashed_vert:K_,linedashed_frag:H_,meshbasic_vert:q_,meshbasic_frag:$_,meshlambert_vert:L_,meshlambert_frag:J_,meshmatcap_vert:Y_,meshmatcap_frag:X_,meshnormal_vert:D_,meshnormal_frag:B_,meshphong_vert:tm,meshphong_frag:em,meshphysical_vert:im,meshphysical_frag:nm,meshtoon_vert:sm,meshtoon_frag:rm,points_vert:om,points_frag:am,shadow_vert:cm,shadow_frag:hm,sprite_vert:lm,sprite_frag:um},ct={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Ei={basic:{uniforms:Ge([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Ge([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new vt(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Ge([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Ge([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Ge([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new vt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Ge([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Ge([ct.points,ct.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Ge([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Ge([ct.common,ct.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Ge([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Ge([ct.sprite,ct.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Ge([ct.common,ct.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Ge([ct.lights,ct.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};Ei.physical={uniforms:Ge([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};var Ir={r:0,b:0,g:0};function Em(n,t,e,i,s,r,a){let o=new vt(0),c=r===!0?0:1,h,l,u=null,E=0,_=null;function m(f,d){let O=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?e:t).get(x)),x===null?p(o,c):x&&x.isColor&&(p(x,1),O=!0);let v=n.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||O)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===vo)?(l===void 0&&(l=new Gt(new Ue(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:es(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,w,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(x.colorSpace)!==ee,(u!==x||E!==x.version||_!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,E=x.version,_=n.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(h===void 0&&(h=new Gt(new fi(2,2),new Wi({name:"BackgroundMaterial",uniforms:es(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=x,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=Yt.getTransfer(x.colorSpace)!==ee,x.matrixAutoUpdate===!0&&x.updateMatrix(),h.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||E!==x.version||_!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,E=x.version,_=n.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null))}function p(f,d){f.getRGB(Ir,Eu(n)),i.buffers.color.setClear(Ir.r,Ir.g,Ir.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(f,d=1){o.set(f),c=d,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,p(o,c)},render:m}}function dm(n,t,e,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},c=f(null),h=c,l=!1;function u(W,b,K,X,J){let q=!1;if(a){let B=p(X,K,b);h!==B&&(h=B,_(h.object)),q=d(W,X,K,J),q&&O(W,X,K,J)}else{let B=b.wireframe===!0;(h.geometry!==X.id||h.program!==K.id||h.wireframe!==B)&&(h.geometry=X.id,h.program=K.id,h.wireframe=B,q=!0)}J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),(q||l)&&(l=!1,$(W,b,K,X),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function E(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function _(W){return i.isWebGL2?n.bindVertexArray(W):r.bindVertexArrayOES(W)}function m(W){return i.isWebGL2?n.deleteVertexArray(W):r.deleteVertexArrayOES(W)}function p(W,b,K){let X=K.wireframe===!0,J=o[W.id];J===void 0&&(J={},o[W.id]=J);let q=J[b.id];q===void 0&&(q={},J[b.id]=q);let B=q[X];return B===void 0&&(B=f(E()),q[X]=B),B}function f(W){let b=[],K=[],X=[];for(let J=0;J<s;J++)b[J]=0,K[J]=0,X[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:K,attributeDivisors:X,object:W,attributes:{},index:null}}function d(W,b,K,X){let J=h.attributes,q=b.attributes,B=0,nt=K.getAttributes();for(let ft in nt)if(nt[ft].location>=0){let et=J[ft],Et=q[ft];if(Et===void 0&&(ft==="instanceMatrix"&&W.instanceMatrix&&(Et=W.instanceMatrix),ft==="instanceColor"&&W.instanceColor&&(Et=W.instanceColor)),et===void 0||et.attribute!==Et||Et&&et.data!==Et.data)return!0;B++}return h.attributesNum!==B||h.index!==X}function O(W,b,K,X){let J={},q=b.attributes,B=0,nt=K.getAttributes();for(let ft in nt)if(nt[ft].location>=0){let et=q[ft];et===void 0&&(ft==="instanceMatrix"&&W.instanceMatrix&&(et=W.instanceMatrix),ft==="instanceColor"&&W.instanceColor&&(et=W.instanceColor));let Et={};Et.attribute=et,et&&et.data&&(Et.data=et.data),J[ft]=Et,B++}h.attributes=J,h.attributesNum=B,h.index=X}function x(){let W=h.newAttributes;for(let b=0,K=W.length;b<K;b++)W[b]=0}function v(W){R(W,0)}function R(W,b){let K=h.newAttributes,X=h.enabledAttributes,J=h.attributeDivisors;K[W]=1,X[W]===0&&(n.enableVertexAttribArray(W),X[W]=1),J[W]!==b&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](W,b),J[W]=b)}function w(){let W=h.newAttributes,b=h.enabledAttributes;for(let K=0,X=b.length;K<X;K++)b[K]!==W[K]&&(n.disableVertexAttribArray(K),b[K]=0)}function I(W,b,K,X,J,q,B){B===!0?n.vertexAttribIPointer(W,b,K,J,q):n.vertexAttribPointer(W,b,K,X,J,q)}function $(W,b,K,X){if(i.isWebGL2===!1&&(W.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let J=X.attributes,q=K.getAttributes(),B=b.defaultAttributeValues;for(let nt in q){let ft=q[nt];if(ft.location>=0){let j=J[nt];if(j===void 0&&(nt==="instanceMatrix"&&W.instanceMatrix&&(j=W.instanceMatrix),nt==="instanceColor"&&W.instanceColor&&(j=W.instanceColor)),j!==void 0){let et=j.normalized,Et=j.itemSize,Ot=e.get(j);if(Ot===void 0)continue;let pt=Ot.buffer,wt=Ot.type,Rt=Ot.bytesPerElement,yt=i.isWebGL2===!0&&(wt===n.INT||wt===n.UNSIGNED_INT||j.gpuType===tu);if(j.isInterleavedBufferAttribute){let Wt=j.data,k=Wt.stride,ot=j.offset;if(Wt.isInstancedInterleavedBuffer){for(let P=0;P<ft.locationSize;P++)R(ft.location+P,Wt.meshPerAttribute);W.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Wt.meshPerAttribute*Wt.count)}else for(let P=0;P<ft.locationSize;P++)v(ft.location+P);n.bindBuffer(n.ARRAY_BUFFER,pt);for(let P=0;P<ft.locationSize;P++)I(ft.location+P,Et/ft.locationSize,wt,et,k*Rt,(ot+Et/ft.locationSize*P)*Rt,yt)}else{if(j.isInstancedBufferAttribute){for(let Wt=0;Wt<ft.locationSize;Wt++)R(ft.location+Wt,j.meshPerAttribute);W.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Wt=0;Wt<ft.locationSize;Wt++)v(ft.location+Wt);n.bindBuffer(n.ARRAY_BUFFER,pt);for(let Wt=0;Wt<ft.locationSize;Wt++)I(ft.location+Wt,Et/ft.locationSize,wt,et,Et*Rt,Et/ft.locationSize*Wt*Rt,yt)}}else if(B!==void 0){let et=B[nt];if(et!==void 0)switch(et.length){case 2:n.vertexAttrib2fv(ft.location,et);break;case 3:n.vertexAttrib3fv(ft.location,et);break;case 4:n.vertexAttrib4fv(ft.location,et);break;default:n.vertexAttrib1fv(ft.location,et)}}}}w()}function y(){it();for(let W in o){let b=o[W];for(let K in b){let X=b[K];for(let J in X)m(X[J].object),delete X[J];delete b[K]}delete o[W]}}function S(W){if(o[W.id]===void 0)return;let b=o[W.id];for(let K in b){let X=b[K];for(let J in X)m(X[J].object),delete X[J];delete b[K]}delete o[W.id]}function C(W){for(let b in o){let K=o[b];if(K[W.id]===void 0)continue;let X=K[W.id];for(let J in X)m(X[J].object),delete X[J];delete K[W.id]}}function it(){rt(),l=!0,h!==c&&(h=c,_(h.object))}function rt(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:it,resetDefaultState:rt,dispose:y,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:v,disableUnusedAttributes:w}}function fm(n,t,e,i){let s=i.isWebGL2,r;function a(l){r=l}function o(l,u){n.drawArrays(r,l,u),e.update(u,r,1)}function c(l,u,E){if(E===0)return;let _,m;if(s)_=n,m="drawArraysInstanced";else if(_=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](r,l,u,E),e.update(u,r,E)}function h(l,u,E){if(E===0)return;let _=t.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<E;m++)this.render(l[m],u[m]);else{_.multiDrawArraysWEBGL(r,l,0,u,0,E);let m=0;for(let p=0;p<E;p++)m+=u[p];e.update(m,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=h}function _m(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let h=a||t.has("WEBGL_draw_buffers"),l=e.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),O=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=E>0,v=a||t.has("OES_texture_float"),R=x&&v,w=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:E,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:f,maxVaryings:d,maxFragmentUniforms:O,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:R,maxSamples:w}}function mm(n){let t=this,e=null,i=0,s=!1,r=!1,a=new oi,o=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,E){let _=u.length!==0||E||i!==0||s;return s=E,i=u.length,_},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,E){e=l(u,E,0)},this.setState=function(u,E,_){let m=u.clippingPlanes,p=u.clipIntersection,f=u.clipShadows,d=n.get(u);if(!s||m===null||m.length===0||r&&!f)r?l(null):h();else{let O=r?0:i,x=O*4,v=d.clippingState||null;c.value=v,v=l(m,E,x,_);for(let R=0;R!==x;++R)v[R]=e[R];d.clippingState=v,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=O}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function l(u,E,_,m){let p=u!==null?u.length:0,f=null;if(p!==0){if(f=c.value,m!==!0||f===null){let d=_+p*4,O=E.matrixWorldInverse;o.getNormalMatrix(O),(f===null||f.length<d)&&(f=new Float32Array(d));for(let x=0,v=_;x!==p;++x,v+=4)a.copy(u[x]).applyMatrix4(O,o),a.normal.toArray(f,v),f[v+3]=a.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,f}}function pm(n){let t=new WeakMap;function e(a,o){return o===Ta?a.mapping=Xn:o===Fa&&(a.mapping=Dn),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ta||o===Fa)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let h=new Ha(c.height/2);return h.fromEquirectangularTexture(n,a),t.set(a,h),a.addEventListener("dispose",s),e(h.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var ro=class extends no{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},qn=4,El=[.125,.215,.35,.446,.526,.582],En=20,ya=new ro,dl=new vt,Oa=null,Sa=0,va=0,ln=(1+Math.sqrt(5))/2,Kn=1/ln,fl=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,ln,Kn),new z(0,ln,-Kn),new z(Kn,0,ln),new z(-Kn,0,ln),new z(ln,Kn,0),new z(-ln,Kn,0)],is=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Oa=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ml(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Oa,Sa,va),t.scissorTest=!1,zr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xn||t.mapping===Dn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oa=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:De,minFilter:De,generateMipmaps:!1,type:Rs,format:ci,colorSpace:Ii,depthBuffer:!1},s=_l(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_l(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qm(r)),this._blurMaterial=xm(r,t,e)}return s}_compileMaterial(t){let e=new Gt(this._lodPlanes[0],t);this._renderer.compile(e,ya)}_sceneToCubeUV(t,e,i,s){let o=new ve(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,E=l.toneMapping;l.getClearColor(dl),l.toneMapping=Ji,l.autoClear=!1;let _=new _e({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),m=new Gt(new Ue,_),p=!1,f=t.background;f?f.isColor&&(_.color.copy(f),t.background=null,p=!0):(_.color.copy(dl),p=!0);for(let d=0;d<6;d++){let O=d%3;O===0?(o.up.set(0,c[d],0),o.lookAt(h[d],0,0)):O===1?(o.up.set(0,0,c[d]),o.lookAt(0,h[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,h[d]));let x=this._cubeSize;zr(s,O*x,d>2?x:0,x,x),l.setRenderTarget(s),p&&l.render(m,o),l.render(t,o)}m.geometry.dispose(),m.material.dispose(),l.toneMapping=E,l.autoClear=u,t.background=f}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Xn||t.mapping===Dn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ml());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Gt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;zr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,ya)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=fl[(s-1)%fl.length];this._blur(t,s-1,s,r,a)}e.autoClear=i}_blur(t,e,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){let c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let l=3,u=new Gt(this._lodPlanes[s],h),E=h.uniforms,_=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*_):2*Math.PI/(2*En-1),p=r/m,f=isFinite(r)?1+Math.floor(l*p):En;f>En&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${En}`);let d=[],O=0;for(let I=0;I<En;++I){let $=I/p,y=Math.exp(-$*$/2);d.push(y),I===0?O+=y:I<f&&(O+=2*y)}for(let I=0;I<d.length;I++)d[I]=d[I]/O;E.envMap.value=t.texture,E.samples.value=f,E.weights.value=d,E.latitudinal.value=a==="latitudinal",o&&(E.poleAxis.value=o);let{_lodMax:x}=this;E.dTheta.value=m,E.mipInt.value=x-i;let v=this._sizeLods[s],R=3*v*(s>x-qn?s-x+qn:0),w=4*(this._cubeSize-v);zr(e,R,w,3*v,2*v),c.setRenderTarget(e),c.render(u,ya)}};function Qm(n){let t=[],e=[],i=[],s=n,r=n-qn+1+El.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>n-qn?c=El[a-n+qn-1]:a===0&&(c=0),i.push(c);let h=1/(o-2),l=-h,u=1+h,E=[l,l,u,l,u,u,l,l,u,u,l,u],_=6,m=6,p=3,f=2,d=1,O=new Float32Array(p*m*_),x=new Float32Array(f*m*_),v=new Float32Array(d*m*_);for(let w=0;w<_;w++){let I=w%3*2/3-1,$=w>2?0:-1,y=[I,$,0,I+2/3,$,0,I+2/3,$+1,0,I,$,0,I+2/3,$+1,0,I,$+1,0];O.set(y,p*m*w),x.set(E,f*m*w);let S=[w,w,w,w,w,w];v.set(S,d*m*w)}let R=new ke;R.setAttribute("position",new We(O,p)),R.setAttribute("uv",new We(x,f)),R.setAttribute("faceIndex",new We(v,d)),t.push(R),s>qn&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function _l(n,t,e){let i=new zi(n,t,e);return i.texture.mapping=vo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function xm(n,t,e){let i=new Float32Array(En),s=new z(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:En,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function ml(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function pl(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Gc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gm(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let c=o.mapping,h=c===Ta||c===Fa,l=c===Xn||c===Dn;if(h||l)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new is(n)),u=h?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(h&&u&&u.height>0||l&&u&&s(u)){e===null&&(e=new is(n));let E=h?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,E),o.addEventListener("dispose",r),E.texture}else return null}}}return o}function s(o){let c=0,h=6;for(let l=0;l<h;l++)o[l]!==void 0&&c++;return c===h}function r(o){let c=o.target;c.removeEventListener("dispose",r);let h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Mm(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function ym(n,t,e,i){let s={},r=new WeakMap;function a(u){let E=u.target;E.index!==null&&t.remove(E.index);for(let m in E.attributes)t.remove(E.attributes[m]);for(let m in E.morphAttributes){let p=E.morphAttributes[m];for(let f=0,d=p.length;f<d;f++)t.remove(p[f])}E.removeEventListener("dispose",a),delete s[E.id];let _=r.get(E);_&&(t.remove(_),r.delete(E)),i.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,e.memory.geometries--}function o(u,E){return s[E.id]===!0||(E.addEventListener("dispose",a),s[E.id]=!0,e.memory.geometries++),E}function c(u){let E=u.attributes;for(let m in E)t.update(E[m],n.ARRAY_BUFFER);let _=u.morphAttributes;for(let m in _){let p=_[m];for(let f=0,d=p.length;f<d;f++)t.update(p[f],n.ARRAY_BUFFER)}}function h(u){let E=[],_=u.index,m=u.attributes.position,p=0;if(_!==null){let O=_.array;p=_.version;for(let x=0,v=O.length;x<v;x+=3){let R=O[x+0],w=O[x+1],I=O[x+2];E.push(R,w,w,I,I,R)}}else if(m!==void 0){let O=m.array;p=m.version;for(let x=0,v=O.length/3-1;x<v;x+=3){let R=x+0,w=x+1,I=x+2;E.push(R,w,w,I,I,R)}}else return;let f=new(lu(E)?io:eo)(E,1);f.version=p;let d=r.get(u);d&&t.remove(d),r.set(u,f)}function l(u){let E=r.get(u);if(E){let _=u.index;_!==null&&E.version<_.version&&h(u)}else h(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:l}}function Om(n,t,e,i){let s=i.isWebGL2,r;function a(_){r=_}let o,c;function h(_){o=_.type,c=_.bytesPerElement}function l(_,m){n.drawElements(r,m,o,_*c),e.update(m,r,1)}function u(_,m,p){if(p===0)return;let f,d;if(s)f=n,d="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,m,o,_*c,p),e.update(m,r,p)}function E(_,m,p){if(p===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<p;d++)this.render(_[d]/c,m[d]);else{f.multiDrawElementsWEBGL(r,m,0,o,_,0,p);let d=0;for(let O=0;O<p;O++)d+=m[O];e.update(d,r,1)}}this.setMode=a,this.setIndex=h,this.render=l,this.renderInstances=u,this.renderMultiDraw=E}function Sm(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function vm(n,t){return n[0]-t[0]}function Pm(n,t){return Math.abs(t[1])-Math.abs(n[1])}function km(n,t,e){let i={},s=new Float32Array(8),r=new WeakMap,a=new se,o=[];for(let h=0;h<8;h++)o[h]=[h,0];function c(h,l,u){let E=h.morphTargetInfluences;if(t.isWebGL2===!0){let _=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,m=_!==void 0?_.length:0,p=r.get(l);if(p===void 0||p.count!==m){let W=function(){it.dispose(),r.delete(l),l.removeEventListener("dispose",W)};p!==void 0&&p.texture.dispose();let O=l.morphAttributes.position!==void 0,x=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,R=l.morphAttributes.position||[],w=l.morphAttributes.normal||[],I=l.morphAttributes.color||[],$=0;O===!0&&($=1),x===!0&&($=2),v===!0&&($=3);let y=l.attributes.position.count*$,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let C=new Float32Array(y*S*4*m),it=new Br(C,y,S,m);it.type=qi,it.needsUpdate=!0;let rt=$*4;for(let b=0;b<m;b++){let K=R[b],X=w[b],J=I[b],q=y*S*4*b;for(let B=0;B<K.count;B++){let nt=B*rt;O===!0&&(a.fromBufferAttribute(K,B),C[q+nt+0]=a.x,C[q+nt+1]=a.y,C[q+nt+2]=a.z,C[q+nt+3]=0),x===!0&&(a.fromBufferAttribute(X,B),C[q+nt+4]=a.x,C[q+nt+5]=a.y,C[q+nt+6]=a.z,C[q+nt+7]=0),v===!0&&(a.fromBufferAttribute(J,B),C[q+nt+8]=a.x,C[q+nt+9]=a.y,C[q+nt+10]=a.z,C[q+nt+11]=J.itemSize===4?a.w:1)}}p={count:m,texture:it,size:new ut(y,S)},r.set(l,p),l.addEventListener("dispose",W)}let f=0;for(let O=0;O<E.length;O++)f+=E[O];let d=l.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",d),u.getUniforms().setValue(n,"morphTargetInfluences",E),u.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{let _=E===void 0?0:E.length,m=i[l.id];if(m===void 0||m.length!==_){m=[];for(let x=0;x<_;x++)m[x]=[x,0];i[l.id]=m}for(let x=0;x<_;x++){let v=m[x];v[0]=x,v[1]=E[x]}m.sort(Pm);for(let x=0;x<8;x++)x<_&&m[x][1]?(o[x][0]=m[x][0],o[x][1]=m[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(vm);let p=l.morphAttributes.position,f=l.morphAttributes.normal,d=0;for(let x=0;x<8;x++){let v=o[x],R=v[0],w=v[1];R!==Number.MAX_SAFE_INTEGER&&w?(p&&l.getAttribute("morphTarget"+x)!==p[R]&&l.setAttribute("morphTarget"+x,p[R]),f&&l.getAttribute("morphNormal"+x)!==f[R]&&l.setAttribute("morphNormal"+x,f[R]),s[x]=w,d+=w):(p&&l.hasAttribute("morphTarget"+x)===!0&&l.deleteAttribute("morphTarget"+x),f&&l.hasAttribute("morphNormal"+x)===!0&&l.deleteAttribute("morphNormal"+x),s[x]=0)}let O=l.morphTargetsRelative?1:1-d;u.getUniforms().setValue(n,"morphTargetBaseInfluence",O),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function wm(n,t,e,i){let s=new WeakMap;function r(c){let h=i.render.frame,l=c.geometry,u=t.get(c,l);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let E=c.skeleton;s.get(E)!==h&&(E.update(),s.set(E,h))}return u}function a(){s=new WeakMap}function o(c){let h=c.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}var oo=class extends $e{constructor(t,e,i,s,r,a,o,c,h,l){if(l=l!==void 0?l:_n,l!==_n&&l!==Bn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&l===_n&&(i=Hi),i===void 0&&l===Bn&&(i=fn),super(null,s,r,a,o,c,l,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Re,this.minFilter=c!==void 0?c:Re,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},fu=new $e,_u=new oo(1,1);_u.compareFunction=hu;var mu=new Br,pu=new ja,Qu=new so,Ql=[],xl=[],gl=new Float32Array(16),Ml=new Float32Array(9),yl=new Float32Array(4);function os(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Ql[s];if(r===void 0&&(r=new Float32Array(s),Ql[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function me(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function pe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ko(n,t){let e=xl[t];e===void 0&&(e=new Int32Array(t),xl[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Im(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function zm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;n.uniform2fv(this.addr,t),pe(e,t)}}function Gm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;n.uniform3fv(this.addr,t),pe(e,t)}}function Rm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;n.uniform4fv(this.addr,t),pe(e,t)}}function Wm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),pe(e,t)}else{if(me(e,i))return;yl.set(i),n.uniformMatrix2fv(this.addr,!1,yl),pe(e,i)}}function Zm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),pe(e,t)}else{if(me(e,i))return;Ml.set(i),n.uniformMatrix3fv(this.addr,!1,Ml),pe(e,i)}}function Am(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(me(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),pe(e,t)}else{if(me(e,i))return;gl.set(i),n.uniformMatrix4fv(this.addr,!1,gl),pe(e,i)}}function Tm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Fm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;n.uniform2iv(this.addr,t),pe(e,t)}}function bm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;n.uniform3iv(this.addr,t),pe(e,t)}}function Cm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;n.uniform4iv(this.addr,t),pe(e,t)}}function Um(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Vm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;n.uniform2uiv(this.addr,t),pe(e,t)}}function Nm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;n.uniform3uiv(this.addr,t),pe(e,t)}}function jm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;n.uniform4uiv(this.addr,t),pe(e,t)}}function Km(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?_u:fu;e.setTexture2D(t||r,s)}function Hm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||pu,s)}function qm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Qu,s)}function $m(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||mu,s)}function Lm(n){switch(n){case 5126:return Im;case 35664:return zm;case 35665:return Gm;case 35666:return Rm;case 35674:return Wm;case 35675:return Zm;case 35676:return Am;case 5124:case 35670:return Tm;case 35667:case 35671:return Fm;case 35668:case 35672:return bm;case 35669:case 35673:return Cm;case 5125:return Um;case 36294:return Vm;case 36295:return Nm;case 36296:return jm;case 35678:case 36198:case 36298:case 36306:case 35682:return Km;case 35679:case 36299:case 36307:return Hm;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return $m}}function Jm(n,t){n.uniform1fv(this.addr,t)}function Ym(n,t){let e=os(t,this.size,2);n.uniform2fv(this.addr,e)}function Xm(n,t){let e=os(t,this.size,3);n.uniform3fv(this.addr,e)}function Dm(n,t){let e=os(t,this.size,4);n.uniform4fv(this.addr,e)}function Bm(n,t){let e=os(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function tp(n,t){let e=os(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function ep(n,t){let e=os(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function ip(n,t){n.uniform1iv(this.addr,t)}function np(n,t){n.uniform2iv(this.addr,t)}function sp(n,t){n.uniform3iv(this.addr,t)}function rp(n,t){n.uniform4iv(this.addr,t)}function op(n,t){n.uniform1uiv(this.addr,t)}function ap(n,t){n.uniform2uiv(this.addr,t)}function cp(n,t){n.uniform3uiv(this.addr,t)}function hp(n,t){n.uniform4uiv(this.addr,t)}function lp(n,t,e){let i=this.cache,s=t.length,r=ko(e,s);me(i,r)||(n.uniform1iv(this.addr,r),pe(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||fu,r[a])}function up(n,t,e){let i=this.cache,s=t.length,r=ko(e,s);me(i,r)||(n.uniform1iv(this.addr,r),pe(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||pu,r[a])}function Ep(n,t,e){let i=this.cache,s=t.length,r=ko(e,s);me(i,r)||(n.uniform1iv(this.addr,r),pe(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Qu,r[a])}function dp(n,t,e){let i=this.cache,s=t.length,r=ko(e,s);me(i,r)||(n.uniform1iv(this.addr,r),pe(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||mu,r[a])}function fp(n){switch(n){case 5126:return Jm;case 35664:return Ym;case 35665:return Xm;case 35666:return Dm;case 35674:return Bm;case 35675:return tp;case 35676:return ep;case 5124:case 35670:return ip;case 35667:case 35671:return np;case 35668:case 35672:return sp;case 35669:case 35673:return rp;case 5125:return op;case 36294:return ap;case 36295:return cp;case 36296:return hp;case 35678:case 36198:case 36298:case 36306:case 35682:return lp;case 35679:case 36299:case 36307:return up;case 35680:case 36300:case 36308:case 36293:return Ep;case 36289:case 36303:case 36311:case 36292:return dp}}var qa=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Lm(e.type)}},$a=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fp(e.type)}},La=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},Pa=/(\w+)(\])?(\[|\.)?/g;function Ol(n,t){n.seq.push(t),n.map[t.id]=t}function _p(n,t,e){let i=n.name,s=i.length;for(Pa.lastIndex=0;;){let r=Pa.exec(i),a=Pa.lastIndex,o=r[1],c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===s){Ol(e,h===void 0?new qa(o,n,t):new $a(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new La(o),Ol(e,u)),e=u}}}var Yn=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);_p(r,a,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function Sl(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var mp=37297,pp=0;function Qp(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function xp(n){let t=Yt.getPrimaries(Yt.workingColorSpace),e=Yt.getPrimaries(n),i;switch(t===e?i="":t===Jr&&e===Lr?i="LinearDisplayP3ToLinearSRGB":t===Lr&&e===Jr&&(i="LinearSRGBToLinearDisplayP3"),n){case Ii:case Po:return[i,"LinearTransferOETF"];case le:case zc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function vl(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Qp(n.getShaderSource(t),a)}else return s}function gp(n,t){let e=xp(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Mp(n,t){let e;switch(t){case CE:e="Linear";break;case UE:e="Reinhard";break;case VE:e="OptimizedCineon";break;case wc:e="ACESFilmic";break;case jE:e="AgX";break;case NE:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function yp(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($n).join(`
`)}function Op(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter($n).join(`
`)}function Sp(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function vp(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function $n(n){return n!==""}function Pl(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kl(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Pp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ja(n){return n.replace(Pp,wp)}var kp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function wp(n,t){let e=Ut[t];if(e===void 0){let i=kp.get(t);if(i!==void 0)e=Ut[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ja(e)}var Ip=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wl(n){return n.replace(Ip,zp)}function zp(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Il(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Gp(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Xl?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===kc?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Pi&&(t="SHADOWMAP_TYPE_VSM"),t}function Rp(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Xn:case Dn:t="ENVMAP_TYPE_CUBE";break;case vo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Wp(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Dn&&(t="ENVMAP_MODE_REFRACTION"),t}function Zp(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Dl:t="ENVMAP_BLENDING_MULTIPLY";break;case FE:t="ENVMAP_BLENDING_MIX";break;case bE:t="ENVMAP_BLENDING_ADD";break}return t}function Ap(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Tp(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Gp(e),h=Rp(e),l=Wp(e),u=Zp(e),E=Ap(e),_=e.isWebGL2?"":yp(e),m=Op(e),p=Sp(r),f=s.createProgram(),d,O,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter($n).join(`
`),d.length>0&&(d+=`
`),O=[_,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter($n).join(`
`),O.length>0&&(O+=`
`)):(d=[Il(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($n).join(`
`),O=[_,Il(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",E?"#define CUBEUV_TEXEL_WIDTH "+E.texelWidth:"",E?"#define CUBEUV_TEXEL_HEIGHT "+E.texelHeight:"",E?"#define CUBEUV_MAX_MIP "+E.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ji?"#define TONE_MAPPING":"",e.toneMapping!==Ji?Ut.tonemapping_pars_fragment:"",e.toneMapping!==Ji?Mp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,gp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($n).join(`
`)),a=Ja(a),a=Pl(a,e),a=kl(a,e),o=Ja(o),o=Pl(o,e),o=kl(o,e),a=wl(a),o=wl(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,O=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+O);let v=x+d+a,R=x+O+o,w=Sl(s,s.VERTEX_SHADER,v),I=Sl(s,s.FRAGMENT_SHADER,R);s.attachShader(f,w),s.attachShader(f,I),e.index0AttributeName!==void 0?s.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function $(it){if(n.debug.checkShaderErrors){let rt=s.getProgramInfoLog(f).trim(),W=s.getShaderInfoLog(w).trim(),b=s.getShaderInfoLog(I).trim(),K=!0,X=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,f,w,I);else{let J=vl(s,w,"vertex"),q=vl(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Program Info Log: `+rt+`
`+J+`
`+q)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(W===""||b==="")&&(X=!1);X&&(it.diagnostics={runnable:K,programLog:rt,vertexShader:{log:W,prefix:d},fragmentShader:{log:b,prefix:O}})}s.deleteShader(w),s.deleteShader(I),y=new Yn(s,f),S=vp(s,f)}let y;this.getUniforms=function(){return y===void 0&&$(this),y};let S;this.getAttributes=function(){return S===void 0&&$(this),S};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(f,mp)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=pp++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=w,this.fragmentShader=I,this}var Fp=0,Ya=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Xa(t),e.set(t,i)),i}},Xa=class{constructor(t){this.id=Fp++,this.code=t,this.usedTimes=0}};function bp(n,t,e,i,s,r,a){let o=new Zs,c=new Ya,h=[],l=s.isWebGL2,u=s.logarithmicDepthBuffer,E=s.vertexTextures,_=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return y===0?"uv":`uv${y}`}function f(y,S,C,it,rt){let W=it.fog,b=rt.geometry,K=y.isMeshStandardMaterial?it.environment:null,X=(y.isMeshStandardMaterial?e:t).get(y.envMap||K),J=X&&X.mapping===vo?X.image.height:null,q=m[y.type];y.precision!==null&&(_=s.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));let B=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,nt=B!==void 0?B.length:0,ft=0;b.morphAttributes.position!==void 0&&(ft=1),b.morphAttributes.normal!==void 0&&(ft=2),b.morphAttributes.color!==void 0&&(ft=3);let j,et,Et,Ot;if(q){let Ie=Ei[q];j=Ie.vertexShader,et=Ie.fragmentShader}else j=y.vertexShader,et=y.fragmentShader,c.update(y),Et=c.getVertexShaderID(y),Ot=c.getFragmentShaderID(y);let pt=n.getRenderTarget(),wt=rt.isInstancedMesh===!0,Rt=rt.isBatchedMesh===!0,yt=!!y.map,Wt=!!y.matcap,k=!!X,ot=!!y.aoMap,P=!!y.lightMap,T=!!y.bumpMap,Z=!!y.normalMap,H=!!y.displacementMap,st=!!y.emissiveMap,g=!!y.metalnessMap,Q=!!y.roughnessMap,A=y.anisotropy>0,D=y.clearcoat>0,Y=y.iridescence>0,L=y.sheen>0,dt=y.transmission>0,ht=A&&!!y.anisotropyMap,Qt=D&&!!y.clearcoatMap,lt=D&&!!y.clearcoatNormalMap,Pt=D&&!!y.clearcoatRoughnessMap,tt=Y&&!!y.iridescenceMap,jt=Y&&!!y.iridescenceThicknessMap,bt=L&&!!y.sheenColorMap,At=L&&!!y.sheenRoughnessMap,kt=!!y.specularMap,gt=!!y.specularColorMap,Tt=!!y.specularIntensityMap,Jt=dt&&!!y.transmissionMap,ce=dt&&!!y.thicknessMap,Kt=!!y.gradientMap,at=!!y.alphaMap,G=y.alphaTest>0,_t=!!y.alphaHash,mt=!!y.extensions,Zt=!!b.attributes.uv1,It=!!b.attributes.uv2,Dt=!!b.attributes.uv3,Bt=Ji;return y.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(Bt=n.toneMapping),{isWebGL2:l,shaderID:q,shaderType:y.type,shaderName:y.name,vertexShader:j,fragmentShader:et,defines:y.defines,customVertexShaderID:Et,customFragmentShaderID:Ot,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:Rt,instancing:wt,instancingColor:wt&&rt.instanceColor!==null,supportsVertexTextures:E,outputColorSpace:pt===null?n.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Ii,map:yt,matcap:Wt,envMap:k,envMapMode:k&&X.mapping,envMapCubeUVHeight:J,aoMap:ot,lightMap:P,bumpMap:T,normalMap:Z,displacementMap:E&&H,emissiveMap:st,normalMapObjectSpace:Z&&y.normalMapType===ed,normalMapTangentSpace:Z&&y.normalMapType===cu,metalnessMap:g,roughnessMap:Q,anisotropy:A,anisotropyMap:ht,clearcoat:D,clearcoatMap:Qt,clearcoatNormalMap:lt,clearcoatRoughnessMap:Pt,iridescence:Y,iridescenceMap:tt,iridescenceThicknessMap:jt,sheen:L,sheenColorMap:bt,sheenRoughnessMap:At,specularMap:kt,specularColorMap:gt,specularIntensityMap:Tt,transmission:dt,transmissionMap:Jt,thicknessMap:ce,gradientMap:Kt,opaque:y.transparent===!1&&y.blending===Li,alphaMap:at,alphaTest:G,alphaHash:_t,combine:y.combine,mapUv:yt&&p(y.map.channel),aoMapUv:ot&&p(y.aoMap.channel),lightMapUv:P&&p(y.lightMap.channel),bumpMapUv:T&&p(y.bumpMap.channel),normalMapUv:Z&&p(y.normalMap.channel),displacementMapUv:H&&p(y.displacementMap.channel),emissiveMapUv:st&&p(y.emissiveMap.channel),metalnessMapUv:g&&p(y.metalnessMap.channel),roughnessMapUv:Q&&p(y.roughnessMap.channel),anisotropyMapUv:ht&&p(y.anisotropyMap.channel),clearcoatMapUv:Qt&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:lt&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:At&&p(y.sheenRoughnessMap.channel),specularMapUv:kt&&p(y.specularMap.channel),specularColorMapUv:gt&&p(y.specularColorMap.channel),specularIntensityMapUv:Tt&&p(y.specularIntensityMap.channel),transmissionMapUv:Jt&&p(y.transmissionMap.channel),thicknessMapUv:ce&&p(y.thicknessMap.channel),alphaMapUv:at&&p(y.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(Z||A),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,vertexUv1s:Zt,vertexUv2s:It,vertexUv3s:Dt,pointsUvs:rt.isPoints===!0&&!!b.attributes.uv&&(yt||at),fog:!!W,useFog:y.fog===!0,fogExp2:W&&W.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:rt.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:ft,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Bt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:yt&&y.map.isVideoTexture===!0&&Yt.getTransfer(y.map.colorSpace)===ee,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ki,flipSided:y.side===Pe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:mt&&y.extensions.derivatives===!0,extensionFragDepth:mt&&y.extensions.fragDepth===!0,extensionDrawBuffers:mt&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:mt&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:mt&&y.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:l||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let C in y.defines)S.push(C),S.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(O(S,y),x(S,y),S.push(n.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function O(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function x(y,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function v(y){let S=m[y.type],C;if(S){let it=Ei[S];C=Pd.clone(it.uniforms)}else C=y.uniforms;return C}function R(y,S){let C;for(let it=0,rt=h.length;it<rt;it++){let W=h[it];if(W.cacheKey===S){C=W,++C.usedTimes;break}}return C===void 0&&(C=new Tp(n,S,y,r),h.push(C)),C}function w(y){if(--y.usedTimes===0){let S=h.indexOf(y);h[S]=h[h.length-1],h.pop(),y.destroy()}}function I(y){c.remove(y)}function $(){c.dispose()}return{getParameters:f,getProgramCacheKey:d,getUniforms:v,acquireProgram:R,releaseProgram:w,releaseShaderCache:I,programs:h,dispose:$}}function Cp(){let n=new WeakMap;function t(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function e(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function Up(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function zl(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Gl(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u,E,_,m,p,f){let d=n[t];return d===void 0?(d={id:u.id,object:u,geometry:E,material:_,groupOrder:m,renderOrder:u.renderOrder,z:p,group:f},n[t]=d):(d.id=u.id,d.object=u,d.geometry=E,d.material=_,d.groupOrder=m,d.renderOrder=u.renderOrder,d.z=p,d.group=f),t++,d}function o(u,E,_,m,p,f){let d=a(u,E,_,m,p,f);_.transmission>0?i.push(d):_.transparent===!0?s.push(d):e.push(d)}function c(u,E,_,m,p,f){let d=a(u,E,_,m,p,f);_.transmission>0?i.unshift(d):_.transparent===!0?s.unshift(d):e.unshift(d)}function h(u,E){e.length>1&&e.sort(u||Up),i.length>1&&i.sort(E||zl),s.length>1&&s.sort(E||zl)}function l(){for(let u=t,E=n.length;u<E;u++){let _=n[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:l,sort:h}}function Vp(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new Gl,n.set(i,[a])):s>=r.length?(a=new Gl,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Np(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new vt};break;case"SpotLight":e={position:new z,direction:new z,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":e={color:new vt,position:new z,halfWidth:new z,halfHeight:new z};break}return n[t.id]=e,e}}}function jp(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Kp=0;function Hp(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function qp(n,t){let e=new Np,i=jp(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)s.probe.push(new z);let r=new z,a=new ie,o=new ie;function c(l,u){let E=0,_=0,m=0;for(let it=0;it<9;it++)s.probe[it].set(0,0,0);let p=0,f=0,d=0,O=0,x=0,v=0,R=0,w=0,I=0,$=0,y=0;l.sort(Hp);let S=u===!0?Math.PI:1;for(let it=0,rt=l.length;it<rt;it++){let W=l[it],b=W.color,K=W.intensity,X=W.distance,J=W.shadow&&W.shadow.map?W.shadow.map.texture:null;if(W.isAmbientLight)E+=b.r*K*S,_+=b.g*K*S,m+=b.b*K*S;else if(W.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(W.sh.coefficients[q],K);y++}else if(W.isDirectionalLight){let q=e.get(W);if(q.color.copy(W.color).multiplyScalar(W.intensity*S),W.castShadow){let B=W.shadow,nt=i.get(W);nt.shadowBias=B.bias,nt.shadowNormalBias=B.normalBias,nt.shadowRadius=B.radius,nt.shadowMapSize=B.mapSize,s.directionalShadow[p]=nt,s.directionalShadowMap[p]=J,s.directionalShadowMatrix[p]=W.shadow.matrix,v++}s.directional[p]=q,p++}else if(W.isSpotLight){let q=e.get(W);q.position.setFromMatrixPosition(W.matrixWorld),q.color.copy(b).multiplyScalar(K*S),q.distance=X,q.coneCos=Math.cos(W.angle),q.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),q.decay=W.decay,s.spot[d]=q;let B=W.shadow;if(W.map&&(s.spotLightMap[I]=W.map,I++,B.updateMatrices(W),W.castShadow&&$++),s.spotLightMatrix[d]=B.matrix,W.castShadow){let nt=i.get(W);nt.shadowBias=B.bias,nt.shadowNormalBias=B.normalBias,nt.shadowRadius=B.radius,nt.shadowMapSize=B.mapSize,s.spotShadow[d]=nt,s.spotShadowMap[d]=J,w++}d++}else if(W.isRectAreaLight){let q=e.get(W);q.color.copy(b).multiplyScalar(K),q.halfWidth.set(W.width*.5,0,0),q.halfHeight.set(0,W.height*.5,0),s.rectArea[O]=q,O++}else if(W.isPointLight){let q=e.get(W);if(q.color.copy(W.color).multiplyScalar(W.intensity*S),q.distance=W.distance,q.decay=W.decay,W.castShadow){let B=W.shadow,nt=i.get(W);nt.shadowBias=B.bias,nt.shadowNormalBias=B.normalBias,nt.shadowRadius=B.radius,nt.shadowMapSize=B.mapSize,nt.shadowCameraNear=B.camera.near,nt.shadowCameraFar=B.camera.far,s.pointShadow[f]=nt,s.pointShadowMap[f]=J,s.pointShadowMatrix[f]=W.shadow.matrix,R++}s.point[f]=q,f++}else if(W.isHemisphereLight){let q=e.get(W);q.skyColor.copy(W.color).multiplyScalar(K*S),q.groundColor.copy(W.groundColor).multiplyScalar(K*S),s.hemi[x]=q,x++}}O>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_FLOAT_1,s.rectAreaLTC2=ct.LTC_FLOAT_2):(s.rectAreaLTC1=ct.LTC_HALF_1,s.rectAreaLTC2=ct.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_FLOAT_1,s.rectAreaLTC2=ct.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_HALF_1,s.rectAreaLTC2=ct.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=E,s.ambient[1]=_,s.ambient[2]=m;let C=s.hash;(C.directionalLength!==p||C.pointLength!==f||C.spotLength!==d||C.rectAreaLength!==O||C.hemiLength!==x||C.numDirectionalShadows!==v||C.numPointShadows!==R||C.numSpotShadows!==w||C.numSpotMaps!==I||C.numLightProbes!==y)&&(s.directional.length=p,s.spot.length=d,s.rectArea.length=O,s.point.length=f,s.hemi.length=x,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=w+I-$,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=$,s.numLightProbes=y,C.directionalLength=p,C.pointLength=f,C.spotLength=d,C.rectAreaLength=O,C.hemiLength=x,C.numDirectionalShadows=v,C.numPointShadows=R,C.numSpotShadows=w,C.numSpotMaps=I,C.numLightProbes=y,s.version=Kp++)}function h(l,u){let E=0,_=0,m=0,p=0,f=0,d=u.matrixWorldInverse;for(let O=0,x=l.length;O<x;O++){let v=l[O];if(v.isDirectionalLight){let R=s.directional[E];R.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(d),E++}else if(v.isSpotLight){let R=s.spot[m];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(d),R.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(d),m++}else if(v.isRectAreaLight){let R=s.rectArea[p];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(d),o.identity(),a.copy(v.matrixWorld),a.premultiply(d),o.extractRotation(a),R.halfWidth.set(v.width*.5,0,0),R.halfHeight.set(0,v.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){let R=s.point[_];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(d),_++}else if(v.isHemisphereLight){let R=s.hemi[f];R.direction.setFromMatrixPosition(v.matrixWorld),R.direction.transformDirection(d),f++}}}return{setup:c,setupView:h,state:s}}function Rl(n,t){let e=new qp(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function a(u){i.push(u)}function o(u){s.push(u)}function c(u){e.setup(i,u)}function h(u){e.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o}}function $p(n,t){let e=new WeakMap;function i(r,a=0){let o=e.get(r),c;return o===void 0?(c=new Rl(n,t),e.set(r,[c])):a>=o.length?(c=new Rl(n,t),o.push(c)):c=o[a],c}function s(){e=new WeakMap}return{get:i,dispose:s}}var Da=class extends di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ba=class extends di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Lp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yp(n,t,e){let i=new As,s=new ut,r=new ut,a=new se,o=new Da({depthPacking:td}),c=new Ba,h={},l=e.maxTextureSize,u={[Xi]:Pe,[Pe]:Xi,[ki]:ki},E=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Lp,fragmentShader:Jp}),_=E.clone();_.defines.HORIZONTAL_PASS=1;let m=new ke;m.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let p=new Gt(m,E),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xl;let d=this.type;this.render=function(w,I,$){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;let y=n.getRenderTarget(),S=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),it=n.state;it.setBlending($i),it.buffers.color.setClear(1,1,1,1),it.buffers.depth.setTest(!0),it.setScissorTest(!1);let rt=d!==Pi&&this.type===Pi,W=d===Pi&&this.type!==Pi;for(let b=0,K=w.length;b<K;b++){let X=w[b],J=X.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let q=J.getFrameExtents();if(s.multiply(q),r.copy(J.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(r.x=Math.floor(l/q.x),s.x=r.x*q.x,J.mapSize.x=r.x),s.y>l&&(r.y=Math.floor(l/q.y),s.y=r.y*q.y,J.mapSize.y=r.y)),J.map===null||rt===!0||W===!0){let nt=this.type!==Pi?{minFilter:Re,magFilter:Re}:{};J.map!==null&&J.map.dispose(),J.map=new zi(s.x,s.y,nt),J.map.texture.name=X.name+".shadowMap",J.camera.updateProjectionMatrix()}n.setRenderTarget(J.map),n.clear();let B=J.getViewportCount();for(let nt=0;nt<B;nt++){let ft=J.getViewport(nt);a.set(r.x*ft.x,r.y*ft.y,r.x*ft.z,r.y*ft.w),it.viewport(a),J.updateMatrices(X,nt),i=J.getFrustum(),v(I,$,J.camera,X,this.type)}J.isPointLightShadow!==!0&&this.type===Pi&&O(J,$),J.needsUpdate=!1}d=this.type,f.needsUpdate=!1,n.setRenderTarget(y,S,C)};function O(w,I){let $=t.update(p);E.defines.VSM_SAMPLES!==w.blurSamples&&(E.defines.VSM_SAMPLES=w.blurSamples,_.defines.VSM_SAMPLES=w.blurSamples,E.needsUpdate=!0,_.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new zi(s.x,s.y)),E.uniforms.shadow_pass.value=w.map.texture,E.uniforms.resolution.value=w.mapSize,E.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(I,null,$,E,p,null),_.uniforms.shadow_pass.value=w.mapPass.texture,_.uniforms.resolution.value=w.mapSize,_.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(I,null,$,_,p,null)}function x(w,I,$,y){let S=null,C=$.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)S=C;else if(S=$.isPointLight===!0?c:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let it=S.uuid,rt=I.uuid,W=h[it];W===void 0&&(W={},h[it]=W);let b=W[rt];b===void 0&&(b=S.clone(),W[rt]=b,I.addEventListener("dispose",R)),S=b}if(S.visible=I.visible,S.wireframe=I.wireframe,y===Pi?S.side=I.shadowSide!==null?I.shadowSide:I.side:S.side=I.shadowSide!==null?I.shadowSide:u[I.side],S.alphaMap=I.alphaMap,S.alphaTest=I.alphaTest,S.map=I.map,S.clipShadows=I.clipShadows,S.clippingPlanes=I.clippingPlanes,S.clipIntersection=I.clipIntersection,S.displacementMap=I.displacementMap,S.displacementScale=I.displacementScale,S.displacementBias=I.displacementBias,S.wireframeLinewidth=I.wireframeLinewidth,S.linewidth=I.linewidth,$.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let it=n.properties.get(S);it.light=$}return S}function v(w,I,$,y,S){if(w.visible===!1)return;if(w.layers.test(I.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Pi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld);let rt=t.update(w),W=w.material;if(Array.isArray(W)){let b=rt.groups;for(let K=0,X=b.length;K<X;K++){let J=b[K],q=W[J.materialIndex];if(q&&q.visible){let B=x(w,q,y,S);w.onBeforeShadow(n,w,I,$,rt,B,J),n.renderBufferDirect($,null,rt,B,w,J),w.onAfterShadow(n,w,I,$,rt,B,J)}}}else if(W.visible){let b=x(w,W,y,S);w.onBeforeShadow(n,w,I,$,rt,b,null),n.renderBufferDirect($,null,rt,b,w,null),w.onAfterShadow(n,w,I,$,rt,b,null)}}let it=w.children;for(let rt=0,W=it.length;rt<W;rt++)v(it[rt],I,$,y,S)}function R(w){w.target.removeEventListener("dispose",R);for(let $ in h){let y=h[$],S=w.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}function Xp(n,t,e){let i=e.isWebGL2;function s(){let G=!1,_t=new se,mt=null,Zt=new se(0,0,0,0);return{setMask:function(It){mt!==It&&!G&&(n.colorMask(It,It,It,It),mt=It)},setLocked:function(It){G=It},setClear:function(It,Dt,Bt,Qe,Ie){Ie===!0&&(It*=Qe,Dt*=Qe,Bt*=Qe),_t.set(It,Dt,Bt,Qe),Zt.equals(_t)===!1&&(n.clearColor(It,Dt,Bt,Qe),Zt.copy(_t))},reset:function(){G=!1,mt=null,Zt.set(-1,0,0,0)}}}function r(){let G=!1,_t=null,mt=null,Zt=null;return{setTest:function(It){It?Rt(n.DEPTH_TEST):yt(n.DEPTH_TEST)},setMask:function(It){_t!==It&&!G&&(n.depthMask(It),_t=It)},setFunc:function(It){if(mt!==It){switch(It){case zE:n.depthFunc(n.NEVER);break;case GE:n.depthFunc(n.ALWAYS);break;case RE:n.depthFunc(n.LESS);break;case Kr:n.depthFunc(n.LEQUAL);break;case WE:n.depthFunc(n.EQUAL);break;case ZE:n.depthFunc(n.GEQUAL);break;case AE:n.depthFunc(n.GREATER);break;case TE:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}mt=It}},setLocked:function(It){G=It},setClear:function(It){Zt!==It&&(n.clearDepth(It),Zt=It)},reset:function(){G=!1,_t=null,mt=null,Zt=null}}}function a(){let G=!1,_t=null,mt=null,Zt=null,It=null,Dt=null,Bt=null,Qe=null,Ie=null;return{setTest:function(te){G||(te?Rt(n.STENCIL_TEST):yt(n.STENCIL_TEST))},setMask:function(te){_t!==te&&!G&&(n.stencilMask(te),_t=te)},setFunc:function(te,ze,ui){(mt!==te||Zt!==ze||It!==ui)&&(n.stencilFunc(te,ze,ui),mt=te,Zt=ze,It=ui)},setOp:function(te,ze,ui){(Dt!==te||Bt!==ze||Qe!==ui)&&(n.stencilOp(te,ze,ui),Dt=te,Bt=ze,Qe=ui)},setLocked:function(te){G=te},setClear:function(te){Ie!==te&&(n.clearStencil(te),Ie=te)},reset:function(){G=!1,_t=null,mt=null,Zt=null,It=null,Dt=null,Bt=null,Qe=null,Ie=null}}}let o=new s,c=new r,h=new a,l=new WeakMap,u=new WeakMap,E={},_={},m=new WeakMap,p=[],f=null,d=!1,O=null,x=null,v=null,R=null,w=null,I=null,$=null,y=new vt(0,0,0),S=0,C=!1,it=null,rt=null,W=null,b=null,K=null,X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,q=0,B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(B)[1]),J=q>=1):B.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),J=q>=2);let nt=null,ft={},j=n.getParameter(n.SCISSOR_BOX),et=n.getParameter(n.VIEWPORT),Et=new se().fromArray(j),Ot=new se().fromArray(et);function pt(G,_t,mt,Zt){let It=new Uint8Array(4),Dt=n.createTexture();n.bindTexture(G,Dt),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Bt=0;Bt<mt;Bt++)i&&(G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY)?n.texImage3D(_t,0,n.RGBA,1,1,Zt,0,n.RGBA,n.UNSIGNED_BYTE,It):n.texImage2D(_t+Bt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,It);return Dt}let wt={};wt[n.TEXTURE_2D]=pt(n.TEXTURE_2D,n.TEXTURE_2D,1),wt[n.TEXTURE_CUBE_MAP]=pt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(wt[n.TEXTURE_2D_ARRAY]=pt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),wt[n.TEXTURE_3D]=pt(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),h.setClear(0),Rt(n.DEPTH_TEST),c.setFunc(Kr),st(!1),g(Eh),Rt(n.CULL_FACE),Z($i);function Rt(G){E[G]!==!0&&(n.enable(G),E[G]=!0)}function yt(G){E[G]!==!1&&(n.disable(G),E[G]=!1)}function Wt(G,_t){return _[G]!==_t?(n.bindFramebuffer(G,_t),_[G]=_t,i&&(G===n.DRAW_FRAMEBUFFER&&(_[n.FRAMEBUFFER]=_t),G===n.FRAMEBUFFER&&(_[n.DRAW_FRAMEBUFFER]=_t)),!0):!1}function k(G,_t){let mt=p,Zt=!1;if(G)if(mt=m.get(_t),mt===void 0&&(mt=[],m.set(_t,mt)),G.isWebGLMultipleRenderTargets){let It=G.texture;if(mt.length!==It.length||mt[0]!==n.COLOR_ATTACHMENT0){for(let Dt=0,Bt=It.length;Dt<Bt;Dt++)mt[Dt]=n.COLOR_ATTACHMENT0+Dt;mt.length=It.length,Zt=!0}}else mt[0]!==n.COLOR_ATTACHMENT0&&(mt[0]=n.COLOR_ATTACHMENT0,Zt=!0);else mt[0]!==n.BACK&&(mt[0]=n.BACK,Zt=!0);Zt&&(e.isWebGL2?n.drawBuffers(mt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(mt))}function ot(G){return f!==G?(n.useProgram(G),f=G,!0):!1}let P={[un]:n.FUNC_ADD,[_E]:n.FUNC_SUBTRACT,[mE]:n.FUNC_REVERSE_SUBTRACT};if(i)P[_h]=n.MIN,P[mh]=n.MAX;else{let G=t.get("EXT_blend_minmax");G!==null&&(P[_h]=G.MIN_EXT,P[mh]=G.MAX_EXT)}let T={[pE]:n.ZERO,[QE]:n.ONE,[xE]:n.SRC_COLOR,[Za]:n.SRC_ALPHA,[vE]:n.SRC_ALPHA_SATURATE,[OE]:n.DST_COLOR,[ME]:n.DST_ALPHA,[gE]:n.ONE_MINUS_SRC_COLOR,[Aa]:n.ONE_MINUS_SRC_ALPHA,[SE]:n.ONE_MINUS_DST_COLOR,[yE]:n.ONE_MINUS_DST_ALPHA,[PE]:n.CONSTANT_COLOR,[kE]:n.ONE_MINUS_CONSTANT_COLOR,[wE]:n.CONSTANT_ALPHA,[IE]:n.ONE_MINUS_CONSTANT_ALPHA};function Z(G,_t,mt,Zt,It,Dt,Bt,Qe,Ie,te){if(G===$i){d===!0&&(yt(n.BLEND),d=!1);return}if(d===!1&&(Rt(n.BLEND),d=!0),G!==fE){if(G!==O||te!==C){if((x!==un||w!==un)&&(n.blendEquation(n.FUNC_ADD),x=un,w=un),te)switch(G){case Li:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jr:n.blendFunc(n.ONE,n.ONE);break;case dh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Li:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case dh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}v=null,R=null,I=null,$=null,y.set(0,0,0),S=0,O=G,C=te}return}It=It||_t,Dt=Dt||mt,Bt=Bt||Zt,(_t!==x||It!==w)&&(n.blendEquationSeparate(P[_t],P[It]),x=_t,w=It),(mt!==v||Zt!==R||Dt!==I||Bt!==$)&&(n.blendFuncSeparate(T[mt],T[Zt],T[Dt],T[Bt]),v=mt,R=Zt,I=Dt,$=Bt),(Qe.equals(y)===!1||Ie!==S)&&(n.blendColor(Qe.r,Qe.g,Qe.b,Ie),y.copy(Qe),S=Ie),O=G,C=!1}function H(G,_t){G.side===ki?yt(n.CULL_FACE):Rt(n.CULL_FACE);let mt=G.side===Pe;_t&&(mt=!mt),st(mt),G.blending===Li&&G.transparent===!1?Z($i):Z(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),o.setMask(G.colorWrite);let Zt=G.stencilWrite;h.setTest(Zt),Zt&&(h.setMask(G.stencilWriteMask),h.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),h.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),A(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Rt(n.SAMPLE_ALPHA_TO_COVERAGE):yt(n.SAMPLE_ALPHA_TO_COVERAGE)}function st(G){it!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),it=G)}function g(G){G!==EE?(Rt(n.CULL_FACE),G!==rt&&(G===Eh?n.cullFace(n.BACK):G===dE?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):yt(n.CULL_FACE),rt=G}function Q(G){G!==W&&(J&&n.lineWidth(G),W=G)}function A(G,_t,mt){G?(Rt(n.POLYGON_OFFSET_FILL),(b!==_t||K!==mt)&&(n.polygonOffset(_t,mt),b=_t,K=mt)):yt(n.POLYGON_OFFSET_FILL)}function D(G){G?Rt(n.SCISSOR_TEST):yt(n.SCISSOR_TEST)}function Y(G){G===void 0&&(G=n.TEXTURE0+X-1),nt!==G&&(n.activeTexture(G),nt=G)}function L(G,_t,mt){mt===void 0&&(nt===null?mt=n.TEXTURE0+X-1:mt=nt);let Zt=ft[mt];Zt===void 0&&(Zt={type:void 0,texture:void 0},ft[mt]=Zt),(Zt.type!==G||Zt.texture!==_t)&&(nt!==mt&&(n.activeTexture(mt),nt=mt),n.bindTexture(G,_t||wt[G]),Zt.type=G,Zt.texture=_t)}function dt(){let G=ft[nt];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ht(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Qt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function lt(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pt(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function tt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function jt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function bt(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function At(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function kt(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function gt(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Tt(G){Et.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Et.copy(G))}function Jt(G){Ot.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),Ot.copy(G))}function ce(G,_t){let mt=u.get(_t);mt===void 0&&(mt=new WeakMap,u.set(_t,mt));let Zt=mt.get(G);Zt===void 0&&(Zt=n.getUniformBlockIndex(_t,G.name),mt.set(G,Zt))}function Kt(G,_t){let Zt=u.get(_t).get(G);l.get(_t)!==Zt&&(n.uniformBlockBinding(_t,Zt,G.__bindingPointIndex),l.set(_t,Zt))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),E={},nt=null,ft={},_={},m=new WeakMap,p=[],f=null,d=!1,O=null,x=null,v=null,R=null,w=null,I=null,$=null,y=new vt(0,0,0),S=0,C=!1,it=null,rt=null,W=null,b=null,K=null,Et.set(0,0,n.canvas.width,n.canvas.height),Ot.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),h.reset()}return{buffers:{color:o,depth:c,stencil:h},enable:Rt,disable:yt,bindFramebuffer:Wt,drawBuffers:k,useProgram:ot,setBlending:Z,setMaterial:H,setFlipSided:st,setCullFace:g,setLineWidth:Q,setPolygonOffset:A,setScissorTest:D,activeTexture:Y,bindTexture:L,unbindTexture:dt,compressedTexImage2D:ht,compressedTexImage3D:Qt,texImage2D:kt,texImage3D:gt,updateUBOMapping:ce,uniformBlockBinding:Kt,texStorage2D:bt,texStorage3D:At,texSubImage2D:lt,texSubImage3D:Pt,compressedTexSubImage2D:tt,compressedTexSubImage3D:jt,scissor:Tt,viewport:Jt,reset:at}}function Dp(n,t,e,i,s,r,a){let o=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new WeakMap,u,E=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(g,Q){return _?new OffscreenCanvas(g,Q):Ws("canvas")}function p(g,Q,A,D){let Y=1;if((g.width>D||g.height>D)&&(Y=D/Math.max(g.width,g.height)),Y<1||Q===!0)if(typeof HTMLImageElement<"u"&&g instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&g instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&g instanceof ImageBitmap){let L=Q?Va:Math.floor,dt=L(Y*g.width),ht=L(Y*g.height);u===void 0&&(u=m(dt,ht));let Qt=A?m(dt,ht):u;return Qt.width=dt,Qt.height=ht,Qt.getContext("2d").drawImage(g,0,0,dt,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+g.width+"x"+g.height+") to ("+dt+"x"+ht+")."),Qt}else return"data"in g&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+g.width+"x"+g.height+")."),g;return g}function f(g){return Jh(g.width)&&Jh(g.height)}function d(g){return o?!1:g.wrapS!==ai||g.wrapT!==ai||g.minFilter!==Re&&g.minFilter!==De}function O(g,Q){return g.generateMipmaps&&Q&&g.minFilter!==Re&&g.minFilter!==De}function x(g){n.generateMipmap(g)}function v(g,Q,A,D,Y=!1){if(o===!1)return Q;if(g!==null){if(n[g]!==void 0)return n[g];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+g+"'")}let L=Q;if(Q===n.RED&&(A===n.FLOAT&&(L=n.R32F),A===n.HALF_FLOAT&&(L=n.R16F),A===n.UNSIGNED_BYTE&&(L=n.R8)),Q===n.RED_INTEGER&&(A===n.UNSIGNED_BYTE&&(L=n.R8UI),A===n.UNSIGNED_SHORT&&(L=n.R16UI),A===n.UNSIGNED_INT&&(L=n.R32UI),A===n.BYTE&&(L=n.R8I),A===n.SHORT&&(L=n.R16I),A===n.INT&&(L=n.R32I)),Q===n.RG&&(A===n.FLOAT&&(L=n.RG32F),A===n.HALF_FLOAT&&(L=n.RG16F),A===n.UNSIGNED_BYTE&&(L=n.RG8)),Q===n.RGBA){let dt=Y?$r:Yt.getTransfer(D);A===n.FLOAT&&(L=n.RGBA32F),A===n.HALF_FLOAT&&(L=n.RGBA16F),A===n.UNSIGNED_BYTE&&(L=dt===ee?n.SRGB8_ALPHA8:n.RGBA8),A===n.UNSIGNED_SHORT_4_4_4_4&&(L=n.RGBA4),A===n.UNSIGNED_SHORT_5_5_5_1&&(L=n.RGB5_A1)}return(L===n.R16F||L===n.R32F||L===n.RG16F||L===n.RG32F||L===n.RGBA16F||L===n.RGBA32F)&&t.get("EXT_color_buffer_float"),L}function R(g,Q,A){return O(g,A)===!0||g.isFramebufferTexture&&g.minFilter!==Re&&g.minFilter!==De?Math.log2(Math.max(Q.width,Q.height))+1:g.mipmaps!==void 0&&g.mipmaps.length>0?g.mipmaps.length:g.isCompressedTexture&&Array.isArray(g.image)?Q.mipmaps.length:1}function w(g){return g===Re||g===ph||g===Xo?n.NEAREST:n.LINEAR}function I(g){let Q=g.target;Q.removeEventListener("dispose",I),y(Q),Q.isVideoTexture&&l.delete(Q)}function $(g){let Q=g.target;Q.removeEventListener("dispose",$),C(Q)}function y(g){let Q=i.get(g);if(Q.__webglInit===void 0)return;let A=g.source,D=E.get(A);if(D){let Y=D[Q.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&S(g),Object.keys(D).length===0&&E.delete(A)}i.remove(g)}function S(g){let Q=i.get(g);n.deleteTexture(Q.__webglTexture);let A=g.source,D=E.get(A);delete D[Q.__cacheKey],a.memory.textures--}function C(g){let Q=g.texture,A=i.get(g),D=i.get(Q);if(D.__webglTexture!==void 0&&(n.deleteTexture(D.__webglTexture),a.memory.textures--),g.depthTexture&&g.depthTexture.dispose(),g.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(A.__webglFramebuffer[Y]))for(let L=0;L<A.__webglFramebuffer[Y].length;L++)n.deleteFramebuffer(A.__webglFramebuffer[Y][L]);else n.deleteFramebuffer(A.__webglFramebuffer[Y]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[Y])}else{if(Array.isArray(A.__webglFramebuffer))for(let Y=0;Y<A.__webglFramebuffer.length;Y++)n.deleteFramebuffer(A.__webglFramebuffer[Y]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Y=0;Y<A.__webglColorRenderbuffer.length;Y++)A.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[Y]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}if(g.isWebGLMultipleRenderTargets)for(let Y=0,L=Q.length;Y<L;Y++){let dt=i.get(Q[Y]);dt.__webglTexture&&(n.deleteTexture(dt.__webglTexture),a.memory.textures--),i.remove(Q[Y])}i.remove(Q),i.remove(g)}let it=0;function rt(){it=0}function W(){let g=it;return g>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+g+" texture units while this GPU supports only "+s.maxTextures),it+=1,g}function b(g){let Q=[];return Q.push(g.wrapS),Q.push(g.wrapT),Q.push(g.wrapR||0),Q.push(g.magFilter),Q.push(g.minFilter),Q.push(g.anisotropy),Q.push(g.internalFormat),Q.push(g.format),Q.push(g.type),Q.push(g.generateMipmaps),Q.push(g.premultiplyAlpha),Q.push(g.flipY),Q.push(g.unpackAlignment),Q.push(g.colorSpace),Q.join()}function K(g,Q){let A=i.get(g);if(g.isVideoTexture&&H(g),g.isRenderTargetTexture===!1&&g.version>0&&A.__version!==g.version){let D=g.image;if(D===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(D.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Et(A,g,Q);return}}e.bindTexture(n.TEXTURE_2D,A.__webglTexture,n.TEXTURE0+Q)}function X(g,Q){let A=i.get(g);if(g.version>0&&A.__version!==g.version){Et(A,g,Q);return}e.bindTexture(n.TEXTURE_2D_ARRAY,A.__webglTexture,n.TEXTURE0+Q)}function J(g,Q){let A=i.get(g);if(g.version>0&&A.__version!==g.version){Et(A,g,Q);return}e.bindTexture(n.TEXTURE_3D,A.__webglTexture,n.TEXTURE0+Q)}function q(g,Q){let A=i.get(g);if(g.version>0&&A.__version!==g.version){Ot(A,g,Q);return}e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+Q)}let B={[ba]:n.REPEAT,[ai]:n.CLAMP_TO_EDGE,[zs]:n.MIRRORED_REPEAT},nt={[Re]:n.NEAREST,[ph]:n.NEAREST_MIPMAP_NEAREST,[Xo]:n.NEAREST_MIPMAP_LINEAR,[De]:n.LINEAR,[KE]:n.LINEAR_MIPMAP_NEAREST,[Gs]:n.LINEAR_MIPMAP_LINEAR},ft={[id]:n.NEVER,[cd]:n.ALWAYS,[nd]:n.LESS,[hu]:n.LEQUAL,[sd]:n.EQUAL,[ad]:n.GEQUAL,[rd]:n.GREATER,[od]:n.NOTEQUAL};function j(g,Q,A){if(A?(n.texParameteri(g,n.TEXTURE_WRAP_S,B[Q.wrapS]),n.texParameteri(g,n.TEXTURE_WRAP_T,B[Q.wrapT]),(g===n.TEXTURE_3D||g===n.TEXTURE_2D_ARRAY)&&n.texParameteri(g,n.TEXTURE_WRAP_R,B[Q.wrapR]),n.texParameteri(g,n.TEXTURE_MAG_FILTER,nt[Q.magFilter]),n.texParameteri(g,n.TEXTURE_MIN_FILTER,nt[Q.minFilter])):(n.texParameteri(g,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(g,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(g===n.TEXTURE_3D||g===n.TEXTURE_2D_ARRAY)&&n.texParameteri(g,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(Q.wrapS!==ai||Q.wrapT!==ai)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(g,n.TEXTURE_MAG_FILTER,w(Q.magFilter)),n.texParameteri(g,n.TEXTURE_MIN_FILTER,w(Q.minFilter)),Q.minFilter!==Re&&Q.minFilter!==De&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),Q.compareFunction&&(n.texParameteri(g,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(g,n.TEXTURE_COMPARE_FUNC,ft[Q.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");if(Q.magFilter===Re||Q.minFilter!==Xo&&Q.minFilter!==Gs||Q.type===qi&&t.has("OES_texture_float_linear")===!1||o===!1&&Q.type===Rs&&t.has("OES_texture_half_float_linear")===!1)return;(Q.anisotropy>1||i.get(Q).__currentAnisotropy)&&(n.texParameterf(g,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(Q.anisotropy,s.getMaxAnisotropy())),i.get(Q).__currentAnisotropy=Q.anisotropy)}}function et(g,Q){let A=!1;g.__webglInit===void 0&&(g.__webglInit=!0,Q.addEventListener("dispose",I));let D=Q.source,Y=E.get(D);Y===void 0&&(Y={},E.set(D,Y));let L=b(Q);if(L!==g.__cacheKey){Y[L]===void 0&&(Y[L]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,A=!0),Y[L].usedTimes++;let dt=Y[g.__cacheKey];dt!==void 0&&(Y[g.__cacheKey].usedTimes--,dt.usedTimes===0&&S(Q)),g.__cacheKey=L,g.__webglTexture=Y[L].texture}return A}function Et(g,Q,A){let D=n.TEXTURE_2D;(Q.isDataArrayTexture||Q.isCompressedArrayTexture)&&(D=n.TEXTURE_2D_ARRAY),Q.isData3DTexture&&(D=n.TEXTURE_3D);let Y=et(g,Q),L=Q.source;e.bindTexture(D,g.__webglTexture,n.TEXTURE0+A);let dt=i.get(L);if(L.version!==dt.__version||Y===!0){e.activeTexture(n.TEXTURE0+A);let ht=Yt.getPrimaries(Yt.workingColorSpace),Qt=Q.colorSpace===Be?null:Yt.getPrimaries(Q.colorSpace),lt=Q.colorSpace===Be||ht===Qt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,Q.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,Q.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Pt=d(Q)&&f(Q.image)===!1,tt=p(Q.image,Pt,!1,s.maxTextureSize);tt=st(Q,tt);let jt=f(tt)||o,bt=r.convert(Q.format,Q.colorSpace),At=r.convert(Q.type),kt=v(Q.internalFormat,bt,At,Q.colorSpace,Q.isVideoTexture);j(D,Q,jt);let gt,Tt=Q.mipmaps,Jt=o&&Q.isVideoTexture!==!0&&kt!==ou,ce=dt.__version===void 0||Y===!0,Kt=R(Q,tt,jt);if(Q.isDepthTexture)kt=n.DEPTH_COMPONENT,o?Q.type===qi?kt=n.DEPTH_COMPONENT32F:Q.type===Hi?kt=n.DEPTH_COMPONENT24:Q.type===fn?kt=n.DEPTH24_STENCIL8:kt=n.DEPTH_COMPONENT16:Q.type===qi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),Q.format===_n&&kt===n.DEPTH_COMPONENT&&Q.type!==Ic&&Q.type!==Hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),Q.type=Hi,At=r.convert(Q.type)),Q.format===Bn&&kt===n.DEPTH_COMPONENT&&(kt=n.DEPTH_STENCIL,Q.type!==fn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),Q.type=fn,At=r.convert(Q.type))),ce&&(Jt?e.texStorage2D(n.TEXTURE_2D,1,kt,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,kt,tt.width,tt.height,0,bt,At,null));else if(Q.isDataTexture)if(Tt.length>0&&jt){Jt&&ce&&e.texStorage2D(n.TEXTURE_2D,Kt,kt,Tt[0].width,Tt[0].height);for(let at=0,G=Tt.length;at<G;at++)gt=Tt[at],Jt?e.texSubImage2D(n.TEXTURE_2D,at,0,0,gt.width,gt.height,bt,At,gt.data):e.texImage2D(n.TEXTURE_2D,at,kt,gt.width,gt.height,0,bt,At,gt.data);Q.generateMipmaps=!1}else Jt?(ce&&e.texStorage2D(n.TEXTURE_2D,Kt,kt,tt.width,tt.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,tt.width,tt.height,bt,At,tt.data)):e.texImage2D(n.TEXTURE_2D,0,kt,tt.width,tt.height,0,bt,At,tt.data);else if(Q.isCompressedTexture)if(Q.isCompressedArrayTexture){Jt&&ce&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Kt,kt,Tt[0].width,Tt[0].height,tt.depth);for(let at=0,G=Tt.length;at<G;at++)gt=Tt[at],Q.format!==ci?bt!==null?Jt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,gt.width,gt.height,tt.depth,bt,gt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,at,kt,gt.width,gt.height,tt.depth,0,gt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,gt.width,gt.height,tt.depth,bt,At,gt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,at,kt,gt.width,gt.height,tt.depth,0,bt,At,gt.data)}else{Jt&&ce&&e.texStorage2D(n.TEXTURE_2D,Kt,kt,Tt[0].width,Tt[0].height);for(let at=0,G=Tt.length;at<G;at++)gt=Tt[at],Q.format!==ci?bt!==null?Jt?e.compressedTexSubImage2D(n.TEXTURE_2D,at,0,0,gt.width,gt.height,bt,gt.data):e.compressedTexImage2D(n.TEXTURE_2D,at,kt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage2D(n.TEXTURE_2D,at,0,0,gt.width,gt.height,bt,At,gt.data):e.texImage2D(n.TEXTURE_2D,at,kt,gt.width,gt.height,0,bt,At,gt.data)}else if(Q.isDataArrayTexture)Jt?(ce&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Kt,kt,tt.width,tt.height,tt.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,bt,At,tt.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,kt,tt.width,tt.height,tt.depth,0,bt,At,tt.data);else if(Q.isData3DTexture)Jt?(ce&&e.texStorage3D(n.TEXTURE_3D,Kt,kt,tt.width,tt.height,tt.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,bt,At,tt.data)):e.texImage3D(n.TEXTURE_3D,0,kt,tt.width,tt.height,tt.depth,0,bt,At,tt.data);else if(Q.isFramebufferTexture){if(ce)if(Jt)e.texStorage2D(n.TEXTURE_2D,Kt,kt,tt.width,tt.height);else{let at=tt.width,G=tt.height;for(let _t=0;_t<Kt;_t++)e.texImage2D(n.TEXTURE_2D,_t,kt,at,G,0,bt,At,null),at>>=1,G>>=1}}else if(Tt.length>0&&jt){Jt&&ce&&e.texStorage2D(n.TEXTURE_2D,Kt,kt,Tt[0].width,Tt[0].height);for(let at=0,G=Tt.length;at<G;at++)gt=Tt[at],Jt?e.texSubImage2D(n.TEXTURE_2D,at,0,0,bt,At,gt):e.texImage2D(n.TEXTURE_2D,at,kt,bt,At,gt);Q.generateMipmaps=!1}else Jt?(ce&&e.texStorage2D(n.TEXTURE_2D,Kt,kt,tt.width,tt.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,bt,At,tt)):e.texImage2D(n.TEXTURE_2D,0,kt,bt,At,tt);O(Q,jt)&&x(D),dt.__version=L.version,Q.onUpdate&&Q.onUpdate(Q)}g.__version=Q.version}function Ot(g,Q,A){if(Q.image.length!==6)return;let D=et(g,Q),Y=Q.source;e.bindTexture(n.TEXTURE_CUBE_MAP,g.__webglTexture,n.TEXTURE0+A);let L=i.get(Y);if(Y.version!==L.__version||D===!0){e.activeTexture(n.TEXTURE0+A);let dt=Yt.getPrimaries(Yt.workingColorSpace),ht=Q.colorSpace===Be?null:Yt.getPrimaries(Q.colorSpace),Qt=Q.colorSpace===Be||dt===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,Q.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,Q.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let lt=Q.isCompressedTexture||Q.image[0].isCompressedTexture,Pt=Q.image[0]&&Q.image[0].isDataTexture,tt=[];for(let at=0;at<6;at++)!lt&&!Pt?tt[at]=p(Q.image[at],!1,!0,s.maxCubemapSize):tt[at]=Pt?Q.image[at].image:Q.image[at],tt[at]=st(Q,tt[at]);let jt=tt[0],bt=f(jt)||o,At=r.convert(Q.format,Q.colorSpace),kt=r.convert(Q.type),gt=v(Q.internalFormat,At,kt,Q.colorSpace),Tt=o&&Q.isVideoTexture!==!0,Jt=L.__version===void 0||D===!0,ce=R(Q,jt,bt);j(n.TEXTURE_CUBE_MAP,Q,bt);let Kt;if(lt){Tt&&Jt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ce,gt,jt.width,jt.height);for(let at=0;at<6;at++){Kt=tt[at].mipmaps;for(let G=0;G<Kt.length;G++){let _t=Kt[G];Q.format!==ci?At!==null?Tt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,G,0,0,_t.width,_t.height,At,_t.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,G,gt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Tt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,G,0,0,_t.width,_t.height,At,kt,_t.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,G,gt,_t.width,_t.height,0,At,kt,_t.data)}}}else{Kt=Q.mipmaps,Tt&&Jt&&(Kt.length>0&&ce++,e.texStorage2D(n.TEXTURE_CUBE_MAP,ce,gt,tt[0].width,tt[0].height));for(let at=0;at<6;at++)if(Pt){Tt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,tt[at].width,tt[at].height,At,kt,tt[at].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,gt,tt[at].width,tt[at].height,0,At,kt,tt[at].data);for(let G=0;G<Kt.length;G++){let mt=Kt[G].image[at].image;Tt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,G+1,0,0,mt.width,mt.height,At,kt,mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,G+1,gt,mt.width,mt.height,0,At,kt,mt.data)}}else{Tt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,At,kt,tt[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,gt,At,kt,tt[at]);for(let G=0;G<Kt.length;G++){let _t=Kt[G];Tt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,G+1,0,0,At,kt,_t.image[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,G+1,gt,At,kt,_t.image[at])}}}O(Q,bt)&&x(n.TEXTURE_CUBE_MAP),L.__version=Y.version,Q.onUpdate&&Q.onUpdate(Q)}g.__version=Q.version}function pt(g,Q,A,D,Y,L){let dt=r.convert(A.format,A.colorSpace),ht=r.convert(A.type),Qt=v(A.internalFormat,dt,ht,A.colorSpace);if(!i.get(Q).__hasExternalTextures){let Pt=Math.max(1,Q.width>>L),tt=Math.max(1,Q.height>>L);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?e.texImage3D(Y,L,Qt,Pt,tt,Q.depth,0,dt,ht,null):e.texImage2D(Y,L,Qt,Pt,tt,0,dt,ht,null)}e.bindFramebuffer(n.FRAMEBUFFER,g),Z(Q)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,D,Y,i.get(A).__webglTexture,0,T(Q)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,D,Y,i.get(A).__webglTexture,L),e.bindFramebuffer(n.FRAMEBUFFER,null)}function wt(g,Q,A){if(n.bindRenderbuffer(n.RENDERBUFFER,g),Q.depthBuffer&&!Q.stencilBuffer){let D=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(A||Z(Q)){let Y=Q.depthTexture;Y&&Y.isDepthTexture&&(Y.type===qi?D=n.DEPTH_COMPONENT32F:Y.type===Hi&&(D=n.DEPTH_COMPONENT24));let L=T(Q);Z(Q)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,L,D,Q.width,Q.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,L,D,Q.width,Q.height)}else n.renderbufferStorage(n.RENDERBUFFER,D,Q.width,Q.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,g)}else if(Q.depthBuffer&&Q.stencilBuffer){let D=T(Q);A&&Z(Q)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,D,n.DEPTH24_STENCIL8,Q.width,Q.height):Z(Q)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,D,n.DEPTH24_STENCIL8,Q.width,Q.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,Q.width,Q.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,g)}else{let D=Q.isWebGLMultipleRenderTargets===!0?Q.texture:[Q.texture];for(let Y=0;Y<D.length;Y++){let L=D[Y],dt=r.convert(L.format,L.colorSpace),ht=r.convert(L.type),Qt=v(L.internalFormat,dt,ht,L.colorSpace),lt=T(Q);A&&Z(Q)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,Qt,Q.width,Q.height):Z(Q)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,Qt,Q.width,Q.height):n.renderbufferStorage(n.RENDERBUFFER,Qt,Q.width,Q.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Rt(g,Q){if(Q&&Q.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,g),!(Q.depthTexture&&Q.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(Q.depthTexture).__webglTexture||Q.depthTexture.image.width!==Q.width||Q.depthTexture.image.height!==Q.height)&&(Q.depthTexture.image.width=Q.width,Q.depthTexture.image.height=Q.height,Q.depthTexture.needsUpdate=!0),K(Q.depthTexture,0);let D=i.get(Q.depthTexture).__webglTexture,Y=T(Q);if(Q.depthTexture.format===_n)Z(Q)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,D,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,D,0);else if(Q.depthTexture.format===Bn)Z(Q)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,D,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,D,0);else throw new Error("Unknown depthTexture format")}function yt(g){let Q=i.get(g),A=g.isWebGLCubeRenderTarget===!0;if(g.depthTexture&&!Q.__autoAllocateDepthBuffer){if(A)throw new Error("target.depthTexture not supported in Cube render targets");Rt(Q.__webglFramebuffer,g)}else if(A){Q.__webglDepthbuffer=[];for(let D=0;D<6;D++)e.bindFramebuffer(n.FRAMEBUFFER,Q.__webglFramebuffer[D]),Q.__webglDepthbuffer[D]=n.createRenderbuffer(),wt(Q.__webglDepthbuffer[D],g,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,Q.__webglFramebuffer),Q.__webglDepthbuffer=n.createRenderbuffer(),wt(Q.__webglDepthbuffer,g,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Wt(g,Q,A){let D=i.get(g);Q!==void 0&&pt(D.__webglFramebuffer,g,g.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),A!==void 0&&yt(g)}function k(g){let Q=g.texture,A=i.get(g),D=i.get(Q);g.addEventListener("dispose",$),g.isWebGLMultipleRenderTargets!==!0&&(D.__webglTexture===void 0&&(D.__webglTexture=n.createTexture()),D.__version=Q.version,a.memory.textures++);let Y=g.isWebGLCubeRenderTarget===!0,L=g.isWebGLMultipleRenderTargets===!0,dt=f(g)||o;if(Y){A.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(o&&Q.mipmaps&&Q.mipmaps.length>0){A.__webglFramebuffer[ht]=[];for(let Qt=0;Qt<Q.mipmaps.length;Qt++)A.__webglFramebuffer[ht][Qt]=n.createFramebuffer()}else A.__webglFramebuffer[ht]=n.createFramebuffer()}else{if(o&&Q.mipmaps&&Q.mipmaps.length>0){A.__webglFramebuffer=[];for(let ht=0;ht<Q.mipmaps.length;ht++)A.__webglFramebuffer[ht]=n.createFramebuffer()}else A.__webglFramebuffer=n.createFramebuffer();if(L)if(s.drawBuffers){let ht=g.texture;for(let Qt=0,lt=ht.length;Qt<lt;Qt++){let Pt=i.get(ht[Qt]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&g.samples>0&&Z(g)===!1){let ht=L?Q:[Q];A.__webglMultisampledFramebuffer=n.createFramebuffer(),A.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,A.__webglMultisampledFramebuffer);for(let Qt=0;Qt<ht.length;Qt++){let lt=ht[Qt];A.__webglColorRenderbuffer[Qt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,A.__webglColorRenderbuffer[Qt]);let Pt=r.convert(lt.format,lt.colorSpace),tt=r.convert(lt.type),jt=v(lt.internalFormat,Pt,tt,lt.colorSpace,g.isXRRenderTarget===!0),bt=T(g);n.renderbufferStorageMultisample(n.RENDERBUFFER,bt,jt,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Qt,n.RENDERBUFFER,A.__webglColorRenderbuffer[Qt])}n.bindRenderbuffer(n.RENDERBUFFER,null),g.depthBuffer&&(A.__webglDepthRenderbuffer=n.createRenderbuffer(),wt(A.__webglDepthRenderbuffer,g,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){e.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture),j(n.TEXTURE_CUBE_MAP,Q,dt);for(let ht=0;ht<6;ht++)if(o&&Q.mipmaps&&Q.mipmaps.length>0)for(let Qt=0;Qt<Q.mipmaps.length;Qt++)pt(A.__webglFramebuffer[ht][Qt],g,Q,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Qt);else pt(A.__webglFramebuffer[ht],g,Q,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);O(Q,dt)&&x(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(L){let ht=g.texture;for(let Qt=0,lt=ht.length;Qt<lt;Qt++){let Pt=ht[Qt],tt=i.get(Pt);e.bindTexture(n.TEXTURE_2D,tt.__webglTexture),j(n.TEXTURE_2D,Pt,dt),pt(A.__webglFramebuffer,g,Pt,n.COLOR_ATTACHMENT0+Qt,n.TEXTURE_2D,0),O(Pt,dt)&&x(n.TEXTURE_2D)}e.unbindTexture()}else{let ht=n.TEXTURE_2D;if((g.isWebGL3DRenderTarget||g.isWebGLArrayRenderTarget)&&(o?ht=g.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ht,D.__webglTexture),j(ht,Q,dt),o&&Q.mipmaps&&Q.mipmaps.length>0)for(let Qt=0;Qt<Q.mipmaps.length;Qt++)pt(A.__webglFramebuffer[Qt],g,Q,n.COLOR_ATTACHMENT0,ht,Qt);else pt(A.__webglFramebuffer,g,Q,n.COLOR_ATTACHMENT0,ht,0);O(Q,dt)&&x(ht),e.unbindTexture()}g.depthBuffer&&yt(g)}function ot(g){let Q=f(g)||o,A=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let D=0,Y=A.length;D<Y;D++){let L=A[D];if(O(L,Q)){let dt=g.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ht=i.get(L).__webglTexture;e.bindTexture(dt,ht),x(dt),e.unbindTexture()}}}function P(g){if(o&&g.samples>0&&Z(g)===!1){let Q=g.isWebGLMultipleRenderTargets?g.texture:[g.texture],A=g.width,D=g.height,Y=n.COLOR_BUFFER_BIT,L=[],dt=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=i.get(g),Qt=g.isWebGLMultipleRenderTargets===!0;if(Qt)for(let lt=0;lt<Q.length;lt++)e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let lt=0;lt<Q.length;lt++){L.push(n.COLOR_ATTACHMENT0+lt),g.depthBuffer&&L.push(dt);let Pt=ht.__ignoreDepthValues!==void 0?ht.__ignoreDepthValues:!1;if(Pt===!1&&(g.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),g.stencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),Qt&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ht.__webglColorRenderbuffer[lt]),Pt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[dt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[dt])),Qt){let tt=i.get(Q[lt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,tt,0)}n.blitFramebuffer(0,0,A,D,0,0,A,D,Y,n.NEAREST),h&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,L)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Qt)for(let lt=0;lt<Q.length;lt++){e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,ht.__webglColorRenderbuffer[lt]);let Pt=i.get(Q[lt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,Pt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}}function T(g){return Math.min(s.maxSamples,g.samples)}function Z(g){let Q=i.get(g);return o&&g.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&Q.__useRenderToTexture!==!1}function H(g){let Q=a.render.frame;l.get(g)!==Q&&(l.set(g,Q),g.update())}function st(g,Q){let A=g.colorSpace,D=g.format,Y=g.type;return g.isCompressedTexture===!0||g.isVideoTexture===!0||g.format===Ca||A!==Ii&&A!==Be&&(Yt.getTransfer(A)===ee?o===!1?t.has("EXT_sRGB")===!0&&D===ci?(g.format=Ca,g.minFilter=De,g.generateMipmaps=!1):Q=Xr.sRGBToLinear(Q):(D!==ci||Y!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",A)),Q}this.allocateTextureUnit=W,this.resetTextureUnits=rt,this.setTexture2D=K,this.setTexture2DArray=X,this.setTexture3D=J,this.setTextureCube=q,this.rebindTextures=Wt,this.setupRenderTarget=k,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Z}function Bp(n,t,e){let i=e.isWebGL2;function s(r,a=Be){let o,c=Yt.getTransfer(a);if(r===Yi)return n.UNSIGNED_BYTE;if(r===eu)return n.UNSIGNED_SHORT_4_4_4_4;if(r===iu)return n.UNSIGNED_SHORT_5_5_5_1;if(r===HE)return n.BYTE;if(r===qE)return n.SHORT;if(r===Ic)return n.UNSIGNED_SHORT;if(r===tu)return n.INT;if(r===Hi)return n.UNSIGNED_INT;if(r===qi)return n.FLOAT;if(r===Rs)return i?n.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===$E)return n.ALPHA;if(r===ci)return n.RGBA;if(r===LE)return n.LUMINANCE;if(r===JE)return n.LUMINANCE_ALPHA;if(r===_n)return n.DEPTH_COMPONENT;if(r===Bn)return n.DEPTH_STENCIL;if(r===Ca)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===YE)return n.RED;if(r===nu)return n.RED_INTEGER;if(r===XE)return n.RG;if(r===su)return n.RG_INTEGER;if(r===ru)return n.RGBA_INTEGER;if(r===Do||r===Bo||r===ta||r===ea)if(c===ee)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Do)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ta)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ea)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Do)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Bo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ta)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ea)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Qh||r===xh||r===gh||r===Mh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Qh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===gh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Mh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ou)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===yh||r===Oh)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===yh)return c===ee?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Oh)return c===ee?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Sh||r===vh||r===Ph||r===kh||r===wh||r===Ih||r===zh||r===Gh||r===Rh||r===Wh||r===Zh||r===Ah||r===Th||r===Fh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Sh)return c===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===vh)return c===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ph)return c===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===kh)return c===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===wh)return c===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ih)return c===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zh)return c===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Gh)return c===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Rh)return c===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Wh)return c===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Zh)return c===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ah)return c===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Th)return c===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Fh)return c===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ia||r===bh||r===Ch)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===ia)return c===ee?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===bh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ch)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===DE||r===Uh||r===Vh||r===Nh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===ia)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Uh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Vh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Nh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===fn?i?n.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var tc=class extends ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ce=class extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},tQ={type:"move"},Ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let p of t.hand.values()){let f=e.getJointPose(p,i),d=this._getHandJoint(h,p);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}let l=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],E=l.position.distanceTo(u.position),_=.02,m=.005;h.inputState.pinching&&E>_+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&E<=_-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tQ)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ce;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},ec=class extends Di{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,h=null,l=null,u=null,E=null,_=null,m=null,p=e.getContextAttributes(),f=null,d=null,O=[],x=[],v=new ut,R=null,w=new ve;w.layers.enable(1),w.viewport=new se;let I=new ve;I.layers.enable(2),I.viewport=new se;let $=[w,I],y=new tc;y.layers.enable(1),y.layers.enable(2);let S=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let et=O[j];return et===void 0&&(et=new Ps,O[j]=et),et.getTargetRaySpace()},this.getControllerGrip=function(j){let et=O[j];return et===void 0&&(et=new Ps,O[j]=et),et.getGripSpace()},this.getHand=function(j){let et=O[j];return et===void 0&&(et=new Ps,O[j]=et),et.getHandSpace()};function it(j){let et=x.indexOf(j.inputSource);if(et===-1)return;let Et=O[et];Et!==void 0&&(Et.update(j.inputSource,j.frame,h||a),Et.dispatchEvent({type:j.type,data:j.inputSource}))}function rt(){s.removeEventListener("select",it),s.removeEventListener("selectstart",it),s.removeEventListener("selectend",it),s.removeEventListener("squeeze",it),s.removeEventListener("squeezestart",it),s.removeEventListener("squeezeend",it),s.removeEventListener("end",rt),s.removeEventListener("inputsourceschange",W);for(let j=0;j<O.length;j++){let et=x[j];et!==null&&(x[j]=null,O[j].disconnect(et))}S=null,C=null,t.setRenderTarget(f),_=null,E=null,u=null,s=null,d=null,ft.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(v.width,v.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(j){h=j},this.getBaseLayer=function(){return E!==null?E:_},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",it),s.addEventListener("selectstart",it),s.addEventListener("selectend",it),s.addEventListener("squeeze",it),s.addEventListener("squeezestart",it),s.addEventListener("squeezeend",it),s.addEventListener("end",rt),s.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(v),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let et={antialias:s.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};_=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),d=new zi(_.framebufferWidth,_.framebufferHeight,{format:ci,type:Yi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let et=null,Et=null,Ot=null;p.depth&&(Ot=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=p.stencil?Bn:_n,Et=p.stencil?fn:Hi);let pt={colorFormat:e.RGBA8,depthFormat:Ot,scaleFactor:r};u=new XRWebGLBinding(s,e),E=u.createProjectionLayer(pt),s.updateRenderState({layers:[E]}),t.setPixelRatio(1),t.setSize(E.textureWidth,E.textureHeight,!1),d=new zi(E.textureWidth,E.textureHeight,{format:ci,type:Yi,depthTexture:new oo(E.textureWidth,E.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0});let wt=t.properties.get(d);wt.__ignoreDepthValues=E.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(o),ft.setContext(s),ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function W(j){for(let et=0;et<j.removed.length;et++){let Et=j.removed[et],Ot=x.indexOf(Et);Ot>=0&&(x[Ot]=null,O[Ot].disconnect(Et))}for(let et=0;et<j.added.length;et++){let Et=j.added[et],Ot=x.indexOf(Et);if(Ot===-1){for(let wt=0;wt<O.length;wt++)if(wt>=x.length){x.push(Et),Ot=wt;break}else if(x[wt]===null){x[wt]=Et,Ot=wt;break}if(Ot===-1)break}let pt=O[Ot];pt&&pt.connect(Et)}}let b=new z,K=new z;function X(j,et,Et){b.setFromMatrixPosition(et.matrixWorld),K.setFromMatrixPosition(Et.matrixWorld);let Ot=b.distanceTo(K),pt=et.projectionMatrix.elements,wt=Et.projectionMatrix.elements,Rt=pt[14]/(pt[10]-1),yt=pt[14]/(pt[10]+1),Wt=(pt[9]+1)/pt[5],k=(pt[9]-1)/pt[5],ot=(pt[8]-1)/pt[0],P=(wt[8]+1)/wt[0],T=Rt*ot,Z=Rt*P,H=Ot/(-ot+P),st=H*-ot;et.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(st),j.translateZ(H),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();let g=Rt+H,Q=yt+H,A=T-st,D=Z+(Ot-st),Y=Wt*yt/Q*g,L=k*yt/Q*g;j.projectionMatrix.makePerspective(A,D,Y,L,g,Q),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function J(j,et){et===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(et.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;y.near=I.near=w.near=j.near,y.far=I.far=w.far=j.far,(S!==y.near||C!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),S=y.near,C=y.far);let et=j.parent,Et=y.cameras;J(y,et);for(let Ot=0;Ot<Et.length;Ot++)J(Et[Ot],et);Et.length===2?X(y,w,I):y.projectionMatrix.copy(w.projectionMatrix),q(j,y,et)};function q(j,et,Et){Et===null?j.matrix.copy(et.matrixWorld):(j.matrix.copy(Et.matrixWorld),j.matrix.invert(),j.matrix.multiply(et.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(et.projectionMatrix),j.projectionMatrixInverse.copy(et.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ua*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(E===null&&_===null))return c},this.setFoveation=function(j){c=j,E!==null&&(E.fixedFoveation=j),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=j)};let B=null;function nt(j,et){if(l=et.getViewerPose(h||a),m=et,l!==null){let Et=l.views;_!==null&&(t.setRenderTargetFramebuffer(d,_.framebuffer),t.setRenderTarget(d));let Ot=!1;Et.length!==y.cameras.length&&(y.cameras.length=0,Ot=!0);for(let pt=0;pt<Et.length;pt++){let wt=Et[pt],Rt=null;if(_!==null)Rt=_.getViewport(wt);else{let Wt=u.getViewSubImage(E,wt);Rt=Wt.viewport,pt===0&&(t.setRenderTargetTextures(d,Wt.colorTexture,E.ignoreDepthValues?void 0:Wt.depthStencilTexture),t.setRenderTarget(d))}let yt=$[pt];yt===void 0&&(yt=new ve,yt.layers.enable(pt),yt.viewport=new se,$[pt]=yt),yt.matrix.fromArray(wt.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(wt.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),pt===0&&(y.matrix.copy(yt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Ot===!0&&y.cameras.push(yt)}}for(let Et=0;Et<O.length;Et++){let Ot=x[Et],pt=O[Et];Ot!==null&&pt!==void 0&&pt.update(Ot,et,h||a)}B&&B(j,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),m=null}let ft=new du;ft.setAnimationLoop(nt),this.setAnimationLoop=function(j){B=j},this.dispose=function(){}}};function eQ(n,t){function e(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function i(f,d){d.color.getRGB(f.fogColor.value,Eu(n)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,O,x,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(f,d):d.isMeshToonMaterial?(r(f,d),u(f,d)):d.isMeshPhongMaterial?(r(f,d),l(f,d)):d.isMeshStandardMaterial?(r(f,d),E(f,d),d.isMeshPhysicalMaterial&&_(f,d,v)):d.isMeshMatcapMaterial?(r(f,d),m(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),p(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(a(f,d),d.isLineDashedMaterial&&o(f,d)):d.isPointsMaterial?c(f,d,O,x):d.isSpriteMaterial?h(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,e(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===Pe&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,e(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===Pe&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,e(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,e(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);let O=t.get(d).envMap;if(O&&(f.envMap.value=O,f.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap){f.lightMap.value=d.lightMap;let x=n._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=d.lightMapIntensity*x,e(d.lightMap,f.lightMapTransform)}d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,f.aoMapTransform))}function a(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform))}function o(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function c(f,d,O,x){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*O,f.scale.value=x*.5,d.map&&(f.map.value=d.map,e(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function h(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function l(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function u(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function E(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,f.roughnessMapTransform)),t.get(d).envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function _(f,d,O){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pe&&f.clearcoatNormalScale.value.negate())),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=O.texture,f.transmissionSamplerSize.value.set(O.width,O.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,f.specularIntensityMapTransform))}function m(f,d){d.matcap&&(f.matcap.value=d.matcap)}function p(f,d){let O=t.get(d).light;f.referencePosition.value.setFromMatrixPosition(O.matrixWorld),f.nearDistance.value=O.shadow.camera.near,f.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function iQ(n,t,e,i){let s={},r={},a=[],o=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(O,x){let v=x.program;i.uniformBlockBinding(O,v)}function h(O,x){let v=s[O.id];v===void 0&&(m(O),v=l(O),s[O.id]=v,O.addEventListener("dispose",f));let R=x.program;i.updateUBOMapping(O,R);let w=t.render.frame;r[O.id]!==w&&(E(O),r[O.id]=w)}function l(O){let x=u();O.__bindingPointIndex=x;let v=n.createBuffer(),R=O.__size,w=O.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,R,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,v),v}function u(){for(let O=0;O<o;O++)if(a.indexOf(O)===-1)return a.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function E(O){let x=s[O.id],v=O.uniforms,R=O.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,I=v.length;w<I;w++){let $=Array.isArray(v[w])?v[w]:[v[w]];for(let y=0,S=$.length;y<S;y++){let C=$[y];if(_(C,w,y,R)===!0){let it=C.__offset,rt=Array.isArray(C.value)?C.value:[C.value],W=0;for(let b=0;b<rt.length;b++){let K=rt[b],X=p(K);typeof K=="number"||typeof K=="boolean"?(C.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,it+W,C.__data)):K.isMatrix3?(C.__data[0]=K.elements[0],C.__data[1]=K.elements[1],C.__data[2]=K.elements[2],C.__data[3]=0,C.__data[4]=K.elements[3],C.__data[5]=K.elements[4],C.__data[6]=K.elements[5],C.__data[7]=0,C.__data[8]=K.elements[6],C.__data[9]=K.elements[7],C.__data[10]=K.elements[8],C.__data[11]=0):(K.toArray(C.__data,W),W+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,it,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(O,x,v,R){let w=O.value,I=x+"_"+v;if(R[I]===void 0)return typeof w=="number"||typeof w=="boolean"?R[I]=w:R[I]=w.clone(),!0;{let $=R[I];if(typeof w=="number"||typeof w=="boolean"){if($!==w)return R[I]=w,!0}else if($.equals(w)===!1)return $.copy(w),!0}return!1}function m(O){let x=O.uniforms,v=0,R=16;for(let I=0,$=x.length;I<$;I++){let y=Array.isArray(x[I])?x[I]:[x[I]];for(let S=0,C=y.length;S<C;S++){let it=y[S],rt=Array.isArray(it.value)?it.value:[it.value];for(let W=0,b=rt.length;W<b;W++){let K=rt[W],X=p(K),J=v%R;J!==0&&R-J<X.boundary&&(v+=R-J),it.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),it.__offset=v,v+=X.storage}}}let w=v%R;return w>0&&(v+=R-w),O.__size=v,O.__cache={},this}function p(O){let x={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(x.boundary=4,x.storage=4):O.isVector2?(x.boundary=8,x.storage=8):O.isVector3||O.isColor?(x.boundary=16,x.storage=12):O.isVector4?(x.boundary=16,x.storage=16):O.isMatrix3?(x.boundary=48,x.storage=48):O.isMatrix4?(x.boundary=64,x.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),x}function f(O){let x=O.target;x.removeEventListener("dispose",f);let v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function d(){for(let O in s)n.deleteBuffer(s[O]);a=[],s={},r={}}return{bind:c,update:h,dispose:d}}var Ts=class{constructor(t={}){let{canvas:e=ld(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let E;i!==null?E=i.getContextAttributes().alpha:E=a;let _=new Uint32Array(4),m=new Int32Array(4),p=null,f=null,d=[],O=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=le,this._useLegacyLights=!1,this.toneMapping=Ji,this.toneMappingExposure=1;let x=this,v=!1,R=0,w=0,I=null,$=-1,y=null,S=new se,C=new se,it=null,rt=new vt(0),W=0,b=e.width,K=e.height,X=1,J=null,q=null,B=new se(0,0,b,K),nt=new se(0,0,b,K),ft=!1,j=new As,et=!1,Et=!1,Ot=null,pt=new ie,wt=new ut,Rt=new z,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Wt(){return I===null?X:1}let k=i;function ot(M,F){for(let V=0;V<M.length;V++){let N=M[V],U=e.getContext(N,F);if(U!==null)return U}return null}try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",G,!1),e.addEventListener("webglcontextcreationerror",_t,!1),k===null){let F=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&F.shift(),k=ot(F,M),k===null)throw ot(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let P,T,Z,H,st,g,Q,A,D,Y,L,dt,ht,Qt,lt,Pt,tt,jt,bt,At,kt,gt,Tt,Jt;function ce(){P=new Mm(k),T=new _m(k,P,t),P.init(T),gt=new Bp(k,P,T),Z=new Xp(k,P,T),H=new Sm(k),st=new Cp,g=new Dp(k,P,Z,st,T,gt,H),Q=new pm(x),A=new gm(x),D=new Gd(k,T),Tt=new dm(k,P,D,T),Y=new ym(k,D,H,Tt),L=new wm(k,Y,D,H),bt=new km(k,T,g),Pt=new mm(st),dt=new bp(x,Q,A,P,T,Tt,Pt),ht=new eQ(x,st),Qt=new Vp,lt=new $p(P,T),jt=new Em(x,Q,A,Z,L,E,c),tt=new Yp(x,L,T),Jt=new iQ(k,H,T,Z),At=new fm(k,P,H,T),kt=new Om(k,P,H,T),H.programs=dt.programs,x.capabilities=T,x.extensions=P,x.properties=st,x.renderLists=Qt,x.shadowMap=tt,x.state=Z,x.info=H}ce();let Kt=new ec(x,k);this.xr=Kt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let M=P.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=P.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(M){M!==void 0&&(X=M,this.setSize(b,K,!1))},this.getSize=function(M){return M.set(b,K)},this.setSize=function(M,F,V=!0){if(Kt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}b=M,K=F,e.width=Math.floor(M*X),e.height=Math.floor(F*X),V===!0&&(e.style.width=M+"px",e.style.height=F+"px"),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(b*X,K*X).floor()},this.setDrawingBufferSize=function(M,F,V){b=M,K=F,X=V,e.width=Math.floor(M*V),e.height=Math.floor(F*V),this.setViewport(0,0,M,F)},this.getCurrentViewport=function(M){return M.copy(S)},this.getViewport=function(M){return M.copy(B)},this.setViewport=function(M,F,V,N){M.isVector4?B.set(M.x,M.y,M.z,M.w):B.set(M,F,V,N),Z.viewport(S.copy(B).multiplyScalar(X).floor())},this.getScissor=function(M){return M.copy(nt)},this.setScissor=function(M,F,V,N){M.isVector4?nt.set(M.x,M.y,M.z,M.w):nt.set(M,F,V,N),Z.scissor(C.copy(nt).multiplyScalar(X).floor())},this.getScissorTest=function(){return ft},this.setScissorTest=function(M){Z.setScissorTest(ft=M)},this.setOpaqueSort=function(M){J=M},this.setTransparentSort=function(M){q=M},this.getClearColor=function(M){return M.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor.apply(jt,arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha.apply(jt,arguments)},this.clear=function(M=!0,F=!0,V=!0){let N=0;if(M){let U=!1;if(I!==null){let xt=I.texture.format;U=xt===ru||xt===su||xt===nu}if(U){let xt=I.texture.type,St=xt===Yi||xt===Hi||xt===Ic||xt===fn||xt===eu||xt===iu,zt=jt.getClearColor(),Ft=jt.getClearAlpha(),Nt=zt.r,Ct=zt.g,Vt=zt.b;St?(_[0]=Nt,_[1]=Ct,_[2]=Vt,_[3]=Ft,k.clearBufferuiv(k.COLOR,0,_)):(m[0]=Nt,m[1]=Ct,m[2]=Vt,m[3]=Ft,k.clearBufferiv(k.COLOR,0,m))}else N|=k.COLOR_BUFFER_BIT}F&&(N|=k.DEPTH_BUFFER_BIT),V&&(N|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",G,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),Qt.dispose(),lt.dispose(),st.dispose(),Q.dispose(),A.dispose(),L.dispose(),Tt.dispose(),Jt.dispose(),dt.dispose(),Kt.dispose(),Kt.removeEventListener("sessionstart",Ie),Kt.removeEventListener("sessionend",te),Ot&&(Ot.dispose(),Ot=null),ze.stop()};function at(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let M=H.autoReset,F=tt.enabled,V=tt.autoUpdate,N=tt.needsUpdate,U=tt.type;ce(),H.autoReset=M,tt.enabled=F,tt.autoUpdate=V,tt.needsUpdate=N,tt.type=U}function _t(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function mt(M){let F=M.target;F.removeEventListener("dispose",mt),Zt(F)}function Zt(M){It(M),st.remove(M)}function It(M){let F=st.get(M).programs;F!==void 0&&(F.forEach(function(V){dt.releaseProgram(V)}),M.isShaderMaterial&&dt.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,V,N,U,xt){F===null&&(F=yt);let St=U.isMesh&&U.matrixWorld.determinant()<0,zt=cE(M,F,V,N,U);Z.setMaterial(N,St);let Ft=V.index,Nt=1;if(N.wireframe===!0){if(Ft=Y.getWireframeAttribute(V),Ft===void 0)return;Nt=2}let Ct=V.drawRange,Vt=V.attributes.position,Ee=Ct.start*Nt,Ke=(Ct.start+Ct.count)*Nt;xt!==null&&(Ee=Math.max(Ee,xt.start*Nt),Ke=Math.min(Ke,(xt.start+xt.count)*Nt)),Ft!==null?(Ee=Math.max(Ee,0),Ke=Math.min(Ke,Ft.count)):Vt!=null&&(Ee=Math.max(Ee,0),Ke=Math.min(Ke,Vt.count));let xe=Ke-Ee;if(xe<0||xe===1/0)return;Tt.setup(U,N,zt,V,Ft);let gi,re=At;if(Ft!==null&&(gi=D.get(Ft),re=kt,re.setIndex(gi)),U.isMesh)N.wireframe===!0?(Z.setLineWidth(N.wireframeLinewidth*Wt()),re.setMode(k.LINES)):re.setMode(k.TRIANGLES);else if(U.isLine){let Ht=N.linewidth;Ht===void 0&&(Ht=1),Z.setLineWidth(Ht*Wt()),U.isLineSegments?re.setMode(k.LINES):U.isLineLoop?re.setMode(k.LINE_LOOP):re.setMode(k.LINE_STRIP)}else U.isPoints?re.setMode(k.POINTS):U.isSprite&&re.setMode(k.TRIANGLES);if(U.isBatchedMesh)re.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else if(U.isInstancedMesh)re.renderInstances(Ee,xe,U.count);else if(V.isInstancedBufferGeometry){let Ht=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,$o=Math.min(V.instanceCount,Ht);re.renderInstances(Ee,xe,$o)}else re.render(Ee,xe)};function Dt(M,F,V){M.transparent===!0&&M.side===ki&&M.forceSinglePass===!1?(M.side=Pe,M.needsUpdate=!0,cr(M,F,V),M.side=Xi,M.needsUpdate=!0,cr(M,F,V),M.side=ki):cr(M,F,V)}this.compile=function(M,F,V=null){V===null&&(V=M),f=lt.get(V),f.init(),O.push(f),V.traverseVisible(function(U){U.isLight&&U.layers.test(F.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),M!==V&&M.traverseVisible(function(U){U.isLight&&U.layers.test(F.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights(x._useLegacyLights);let N=new Set;return M.traverse(function(U){let xt=U.material;if(xt)if(Array.isArray(xt))for(let St=0;St<xt.length;St++){let zt=xt[St];Dt(zt,V,U),N.add(zt)}else Dt(xt,V,U),N.add(xt)}),O.pop(),f=null,N},this.compileAsync=function(M,F,V=null){let N=this.compile(M,F,V);return new Promise(U=>{function xt(){if(N.forEach(function(St){st.get(St).currentProgram.isReady()&&N.delete(St)}),N.size===0){U(M);return}setTimeout(xt,10)}P.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Bt=null;function Qe(M){Bt&&Bt(M)}function Ie(){ze.stop()}function te(){ze.start()}let ze=new du;ze.setAnimationLoop(Qe),typeof self<"u"&&ze.setContext(self),this.setAnimationLoop=function(M){Bt=M,Kt.setAnimationLoop(M),M===null?ze.stop():ze.start()},Kt.addEventListener("sessionstart",Ie),Kt.addEventListener("sessionend",te),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Kt.enabled===!0&&Kt.isPresenting===!0&&(Kt.cameraAutoUpdate===!0&&Kt.updateCamera(F),F=Kt.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,F,I),f=lt.get(M,O.length),f.init(),O.push(f),pt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),j.setFromProjectionMatrix(pt),Et=this.localClippingEnabled,et=Pt.init(this.clippingPlanes,Et),p=Qt.get(M,d.length),p.init(),d.push(p),ui(M,F,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(J,q),this.info.render.frame++,et===!0&&Pt.beginShadows();let V=f.state.shadowsArray;if(tt.render(V,M,F),et===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),jt.render(p,M),f.setupLights(x._useLegacyLights),F.isArrayCamera){let N=F.cameras;for(let U=0,xt=N.length;U<xt;U++){let St=N[U];oh(p,M,St,St.viewport)}}else oh(p,M,F);I!==null&&(g.updateMultisampleRenderTarget(I),g.updateRenderTargetMipmap(I)),M.isScene===!0&&M.onAfterRender(x,M,F),Tt.resetDefaultState(),$=-1,y=null,O.pop(),O.length>0?f=O[O.length-1]:f=null,d.pop(),d.length>0?p=d[d.length-1]:p=null};function ui(M,F,V,N){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||j.intersectsSprite(M)){N&&Rt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(pt);let St=L.update(M),zt=M.material;zt.visible&&p.push(M,St,zt,V,Rt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||j.intersectsObject(M))){let St=L.update(M),zt=M.material;if(N&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Rt.copy(M.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Rt.copy(St.boundingSphere.center)),Rt.applyMatrix4(M.matrixWorld).applyMatrix4(pt)),Array.isArray(zt)){let Ft=St.groups;for(let Nt=0,Ct=Ft.length;Nt<Ct;Nt++){let Vt=Ft[Nt],Ee=zt[Vt.materialIndex];Ee&&Ee.visible&&p.push(M,St,Ee,V,Rt.z,Vt)}}else zt.visible&&p.push(M,St,zt,V,Rt.z,null)}}let xt=M.children;for(let St=0,zt=xt.length;St<zt;St++)ui(xt[St],F,V,N)}function oh(M,F,V,N){let U=M.opaque,xt=M.transmissive,St=M.transparent;f.setupLightsView(V),et===!0&&Pt.setGlobalState(x.clippingPlanes,V),xt.length>0&&aE(U,xt,F,V),N&&Z.viewport(S.copy(N)),U.length>0&&ar(U,F,V),xt.length>0&&ar(xt,F,V),St.length>0&&ar(St,F,V),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function aE(M,F,V,N){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;let xt=T.isWebGL2;Ot===null&&(Ot=new zi(1,1,{generateMipmaps:!0,type:P.has("EXT_color_buffer_half_float")?Rs:Yi,minFilter:Gs,samples:xt?4:0})),x.getDrawingBufferSize(wt),xt?Ot.setSize(wt.x,wt.y):Ot.setSize(Va(wt.x),Va(wt.y));let St=x.getRenderTarget();x.setRenderTarget(Ot),x.getClearColor(rt),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear();let zt=x.toneMapping;x.toneMapping=Ji,ar(M,V,N),g.updateMultisampleRenderTarget(Ot),g.updateRenderTargetMipmap(Ot);let Ft=!1;for(let Nt=0,Ct=F.length;Nt<Ct;Nt++){let Vt=F[Nt],Ee=Vt.object,Ke=Vt.geometry,xe=Vt.material,gi=Vt.group;if(xe.side===ki&&Ee.layers.test(N.layers)){let re=xe.side;xe.side=Pe,xe.needsUpdate=!0,ah(Ee,V,N,Ke,xe,gi),xe.side=re,xe.needsUpdate=!0,Ft=!0}}Ft===!0&&(g.updateMultisampleRenderTarget(Ot),g.updateRenderTargetMipmap(Ot)),x.setRenderTarget(St),x.setClearColor(rt,W),x.toneMapping=zt}function ar(M,F,V){let N=F.isScene===!0?F.overrideMaterial:null;for(let U=0,xt=M.length;U<xt;U++){let St=M[U],zt=St.object,Ft=St.geometry,Nt=N===null?St.material:N,Ct=St.group;zt.layers.test(V.layers)&&ah(zt,F,V,Ft,Nt,Ct)}}function ah(M,F,V,N,U,xt){M.onBeforeRender(x,F,V,N,U,xt),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(x,F,V,N,M,xt),U.transparent===!0&&U.side===ki&&U.forceSinglePass===!1?(U.side=Pe,U.needsUpdate=!0,x.renderBufferDirect(V,F,N,U,M,xt),U.side=Xi,U.needsUpdate=!0,x.renderBufferDirect(V,F,N,U,M,xt),U.side=ki):x.renderBufferDirect(V,F,N,U,M,xt),M.onAfterRender(x,F,V,N,U,xt)}function cr(M,F,V){F.isScene!==!0&&(F=yt);let N=st.get(M),U=f.state.lights,xt=f.state.shadowsArray,St=U.state.version,zt=dt.getParameters(M,U.state,xt,F,V),Ft=dt.getProgramCacheKey(zt),Nt=N.programs;N.environment=M.isMeshStandardMaterial?F.environment:null,N.fog=F.fog,N.envMap=(M.isMeshStandardMaterial?A:Q).get(M.envMap||N.environment),Nt===void 0&&(M.addEventListener("dispose",mt),Nt=new Map,N.programs=Nt);let Ct=Nt.get(Ft);if(Ct!==void 0){if(N.currentProgram===Ct&&N.lightsStateVersion===St)return hh(M,zt),Ct}else zt.uniforms=dt.getUniforms(M),M.onBuild(V,zt,x),M.onBeforeCompile(zt,x),Ct=dt.acquireProgram(zt,Ft),Nt.set(Ft,Ct),N.uniforms=zt.uniforms;let Vt=N.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Vt.clippingPlanes=Pt.uniform),hh(M,zt),N.needsLights=lE(M),N.lightsStateVersion=St,N.needsLights&&(Vt.ambientLightColor.value=U.state.ambient,Vt.lightProbe.value=U.state.probe,Vt.directionalLights.value=U.state.directional,Vt.directionalLightShadows.value=U.state.directionalShadow,Vt.spotLights.value=U.state.spot,Vt.spotLightShadows.value=U.state.spotShadow,Vt.rectAreaLights.value=U.state.rectArea,Vt.ltc_1.value=U.state.rectAreaLTC1,Vt.ltc_2.value=U.state.rectAreaLTC2,Vt.pointLights.value=U.state.point,Vt.pointLightShadows.value=U.state.pointShadow,Vt.hemisphereLights.value=U.state.hemi,Vt.directionalShadowMap.value=U.state.directionalShadowMap,Vt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Vt.spotShadowMap.value=U.state.spotShadowMap,Vt.spotLightMatrix.value=U.state.spotLightMatrix,Vt.spotLightMap.value=U.state.spotLightMap,Vt.pointShadowMap.value=U.state.pointShadowMap,Vt.pointShadowMatrix.value=U.state.pointShadowMatrix),N.currentProgram=Ct,N.uniformsList=null,Ct}function ch(M){if(M.uniformsList===null){let F=M.currentProgram.getUniforms();M.uniformsList=Yn.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function hh(M,F){let V=st.get(M);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function cE(M,F,V,N,U){F.isScene!==!0&&(F=yt),g.resetTextureUnits();let xt=F.fog,St=N.isMeshStandardMaterial?F.environment:null,zt=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ii,Ft=(N.isMeshStandardMaterial?A:Q).get(N.envMap||St),Nt=N.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ct=!!V.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),Vt=!!V.morphAttributes.position,Ee=!!V.morphAttributes.normal,Ke=!!V.morphAttributes.color,xe=Ji;N.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(xe=x.toneMapping);let gi=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,re=gi!==void 0?gi.length:0,Ht=st.get(N),$o=f.state.lights;if(et===!0&&(Et===!0||M!==y)){let Ye=M===y&&N.id===$;Pt.setState(N,M,Ye)}let he=!1;N.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==$o.state.version||Ht.outputColorSpace!==zt||U.isBatchedMesh&&Ht.batching===!1||!U.isBatchedMesh&&Ht.batching===!0||U.isInstancedMesh&&Ht.instancing===!1||!U.isInstancedMesh&&Ht.instancing===!0||U.isSkinnedMesh&&Ht.skinning===!1||!U.isSkinnedMesh&&Ht.skinning===!0||U.isInstancedMesh&&Ht.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ht.instancingColor===!1&&U.instanceColor!==null||Ht.envMap!==Ft||N.fog===!0&&Ht.fog!==xt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==Pt.numPlanes||Ht.numIntersection!==Pt.numIntersection)||Ht.vertexAlphas!==Nt||Ht.vertexTangents!==Ct||Ht.morphTargets!==Vt||Ht.morphNormals!==Ee||Ht.morphColors!==Ke||Ht.toneMapping!==xe||T.isWebGL2===!0&&Ht.morphTargetsCount!==re)&&(he=!0):(he=!0,Ht.__version=N.version);let sn=Ht.currentProgram;he===!0&&(sn=cr(N,F,U));let lh=!1,ms=!1,Lo=!1,ye=sn.getUniforms(),rn=Ht.uniforms;if(Z.useProgram(sn.program)&&(lh=!0,ms=!0,Lo=!0),N.id!==$&&($=N.id,ms=!0),lh||y!==M){ye.setValue(k,"projectionMatrix",M.projectionMatrix),ye.setValue(k,"viewMatrix",M.matrixWorldInverse);let Ye=ye.map.cameraPosition;Ye!==void 0&&Ye.setValue(k,Rt.setFromMatrixPosition(M.matrixWorld)),T.logarithmicDepthBuffer&&ye.setValue(k,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&ye.setValue(k,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,ms=!0,Lo=!0)}if(U.isSkinnedMesh){ye.setOptional(k,U,"bindMatrix"),ye.setOptional(k,U,"bindMatrixInverse");let Ye=U.skeleton;Ye&&(T.floatVertexTextures?(Ye.boneTexture===null&&Ye.computeBoneTexture(),ye.setValue(k,"boneTexture",Ye.boneTexture,g)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}U.isBatchedMesh&&(ye.setOptional(k,U,"batchingTexture"),ye.setValue(k,"batchingTexture",U._matricesTexture,g));let Jo=V.morphAttributes;if((Jo.position!==void 0||Jo.normal!==void 0||Jo.color!==void 0&&T.isWebGL2===!0)&&bt.update(U,V,sn),(ms||Ht.receiveShadow!==U.receiveShadow)&&(Ht.receiveShadow=U.receiveShadow,ye.setValue(k,"receiveShadow",U.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(rn.envMap.value=Ft,rn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),ms&&(ye.setValue(k,"toneMappingExposure",x.toneMappingExposure),Ht.needsLights&&hE(rn,Lo),xt&&N.fog===!0&&ht.refreshFogUniforms(rn,xt),ht.refreshMaterialUniforms(rn,N,X,K,Ot),Yn.upload(k,ch(Ht),rn,g)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Yn.upload(k,ch(Ht),rn,g),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&ye.setValue(k,"center",U.center),ye.setValue(k,"modelViewMatrix",U.modelViewMatrix),ye.setValue(k,"normalMatrix",U.normalMatrix),ye.setValue(k,"modelMatrix",U.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){let Ye=N.uniformsGroups;for(let Yo=0,uE=Ye.length;Yo<uE;Yo++)if(T.isWebGL2){let uh=Ye[Yo];Jt.update(uh,sn),Jt.bind(uh,sn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return sn}function hE(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function lE(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(M,F,V){st.get(M.texture).__webglTexture=F,st.get(M.depthTexture).__webglTexture=V;let N=st.get(M);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=V===void 0,N.__autoAllocateDepthBuffer||P.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,F){let V=st.get(M);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,V=0){I=M,R=F,w=V;let N=!0,U=null,xt=!1,St=!1;if(M){let Ft=st.get(M);Ft.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(k.FRAMEBUFFER,null),N=!1):Ft.__webglFramebuffer===void 0?g.setupRenderTarget(M):Ft.__hasExternalTextures&&g.rebindTextures(M,st.get(M.texture).__webglTexture,st.get(M.depthTexture).__webglTexture);let Nt=M.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(St=!0);let Ct=st.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ct[F])?U=Ct[F][V]:U=Ct[F],xt=!0):T.isWebGL2&&M.samples>0&&g.useMultisampledRTT(M)===!1?U=st.get(M).__webglMultisampledFramebuffer:Array.isArray(Ct)?U=Ct[V]:U=Ct,S.copy(M.viewport),C.copy(M.scissor),it=M.scissorTest}else S.copy(B).multiplyScalar(X).floor(),C.copy(nt).multiplyScalar(X).floor(),it=ft;if(Z.bindFramebuffer(k.FRAMEBUFFER,U)&&T.drawBuffers&&N&&Z.drawBuffers(M,U),Z.viewport(S),Z.scissor(C),Z.setScissorTest(it),xt){let Ft=st.get(M.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ft.__webglTexture,V)}else if(St){let Ft=st.get(M.texture),Nt=F||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ft.__webglTexture,V||0,Nt)}$=-1},this.readRenderTargetPixels=function(M,F,V,N,U,xt,St){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=st.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&St!==void 0&&(zt=zt[St]),zt){Z.bindFramebuffer(k.FRAMEBUFFER,zt);try{let Ft=M.texture,Nt=Ft.format,Ct=Ft.type;if(Nt!==ci&&gt.convert(Nt)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Vt=Ct===Rs&&(P.has("EXT_color_buffer_half_float")||T.isWebGL2&&P.has("EXT_color_buffer_float"));if(Ct!==Yi&&gt.convert(Ct)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ct===qi&&(T.isWebGL2||P.has("OES_texture_float")||P.has("WEBGL_color_buffer_float")))&&!Vt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-N&&V>=0&&V<=M.height-U&&k.readPixels(F,V,N,U,gt.convert(Nt),gt.convert(Ct),xt)}finally{let Ft=I!==null?st.get(I).__webglFramebuffer:null;Z.bindFramebuffer(k.FRAMEBUFFER,Ft)}}},this.copyFramebufferToTexture=function(M,F,V=0){let N=Math.pow(2,-V),U=Math.floor(F.image.width*N),xt=Math.floor(F.image.height*N);g.setTexture2D(F,0),k.copyTexSubImage2D(k.TEXTURE_2D,V,0,0,M.x,M.y,U,xt),Z.unbindTexture()},this.copyTextureToTexture=function(M,F,V,N=0){let U=F.image.width,xt=F.image.height,St=gt.convert(V.format),zt=gt.convert(V.type);g.setTexture2D(V,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,V.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,V.unpackAlignment),F.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,N,M.x,M.y,U,xt,St,zt,F.image.data):F.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,N,M.x,M.y,F.mipmaps[0].width,F.mipmaps[0].height,St,F.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,N,M.x,M.y,St,zt,F.image),N===0&&V.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function(M,F,V,N,U=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let xt=M.max.x-M.min.x+1,St=M.max.y-M.min.y+1,zt=M.max.z-M.min.z+1,Ft=gt.convert(N.format),Nt=gt.convert(N.type),Ct;if(N.isData3DTexture)g.setTexture3D(N,0),Ct=k.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)g.setTexture2DArray(N,0),Ct=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,N.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,N.unpackAlignment);let Vt=k.getParameter(k.UNPACK_ROW_LENGTH),Ee=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ke=k.getParameter(k.UNPACK_SKIP_PIXELS),xe=k.getParameter(k.UNPACK_SKIP_ROWS),gi=k.getParameter(k.UNPACK_SKIP_IMAGES),re=V.isCompressedTexture?V.mipmaps[U]:V.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,re.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,re.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,M.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,M.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,M.min.z),V.isDataTexture||V.isData3DTexture?k.texSubImage3D(Ct,U,F.x,F.y,F.z,xt,St,zt,Ft,Nt,re.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Ct,U,F.x,F.y,F.z,xt,St,zt,Ft,re.data)):k.texSubImage3D(Ct,U,F.x,F.y,F.z,xt,St,zt,Ft,Nt,re),k.pixelStorei(k.UNPACK_ROW_LENGTH,Vt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ee),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ke),k.pixelStorei(k.UNPACK_SKIP_ROWS,xe),k.pixelStorei(k.UNPACK_SKIP_IMAGES,gi),U===0&&N.generateMipmaps&&k.generateMipmap(Ct),Z.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?g.setTextureCube(M,0):M.isData3DTexture?g.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?g.setTexture2DArray(M,0):g.setTexture2D(M,0),Z.unbindTexture()},this.resetState=function(){R=0,w=0,I=null,Z.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===zc?"display-p3":"srgb",e.unpackColorSpace=Yt.workingColorSpace===Po?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===le?mn:au}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===mn?le:Ii}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},ic=class extends Ts{};ic.prototype.isWebGL1Renderer=!0;var ns=class extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var ao=class extends We{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Hn=new ie,Wl=new ie,Gr=[],Zl=new Gi,nQ=new ie,ys=new Gt,Os=new Ri,pn=class extends Gt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ao(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,nQ)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Gi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Hn),Zl.copy(t.boundingBox).applyMatrix4(Hn),this.boundingBox.union(Zl)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ri),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Hn),Os.copy(t.boundingSphere).applyMatrix4(Hn),this.boundingSphere.union(Os)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let i=this.matrixWorld,s=this.count;if(ys.geometry=this.geometry,ys.material=this.material,ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Os.copy(this.boundingSphere),Os.applyMatrix4(i),t.ray.intersectsSphere(Os)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hn),Wl.multiplyMatrices(i,Hn),ys.matrixWorld=Wl,ys.raycast(t,Gr);for(let a=0,o=Gr.length;a<o;a++){let c=Gr[a];c.instanceId=r,c.object=this,e.push(c)}Gr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ao(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Fs=class extends di{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Al=new z,Tl=new z,Fl=new ie,ka=new ts,Rr=new Ri,nc=class extends fe{constructor(t=new ke,e=new Fs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Al.fromBufferAttribute(e,s-1),Tl.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Al.distanceTo(Tl);t.setAttribute("lineDistance",new ae(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rr.copy(i.boundingSphere),Rr.applyMatrix4(s),Rr.radius+=r,t.ray.intersectsSphere(Rr)===!1)return;Fl.copy(s).invert(),ka.copy(t.ray).applyMatrix4(Fl);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=new z,l=new z,u=new z,E=new z,_=this.isLineSegments?2:1,m=i.index,f=i.attributes.position;if(m!==null){let d=Math.max(0,a.start),O=Math.min(m.count,a.start+a.count);for(let x=d,v=O-1;x<v;x+=_){let R=m.getX(x),w=m.getX(x+1);if(h.fromBufferAttribute(f,R),l.fromBufferAttribute(f,w),ka.distanceSqToSegment(h,l,E,u)>c)continue;E.applyMatrix4(this.matrixWorld);let $=t.ray.origin.distanceTo(E);$<t.near||$>t.far||e.push({distance:$,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let d=Math.max(0,a.start),O=Math.min(f.count,a.start+a.count);for(let x=d,v=O-1;x<v;x+=_){if(h.fromBufferAttribute(f,x),l.fromBufferAttribute(f,x+1),ka.distanceSqToSegment(h,l,E,u)>c)continue;E.applyMatrix4(this.matrixWorld);let w=t.ray.origin.distanceTo(E);w<t.near||w>t.far||e.push({distance:w,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},bl=new z,Cl=new z,co=class extends nc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)bl.fromBufferAttribute(e,s),Cl.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+bl.distanceTo(Cl);t.setAttribute("lineDistance",new ae(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var bs=class extends di{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ul=new ie,sc=new ts,Wr=new Ri,Zr=new z,ho=class extends fe{constructor(t=new ke,e=new bs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wr.copy(i.boundingSphere),Wr.applyMatrix4(s),Wr.radius+=r,t.ray.intersectsSphere(Wr)===!1)return;Ul.copy(s).invert(),sc.copy(t.ray).applyMatrix4(Ul);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=i.index,u=i.attributes.position;if(h!==null){let E=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let m=E,p=_;m<p;m++){let f=h.getX(m);Zr.fromBufferAttribute(u,f),Vl(Zr,f,c,s,t,e,this)}}else{let E=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let m=E,p=_;m<p;m++)Zr.fromBufferAttribute(u,m),Vl(Zr,m,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Vl(n,t,e,i,s,r,a){let o=sc.distanceSqToPoint(n);if(o<e){let c=new z;sc.closestPointToPoint(n,c),c.applyMatrix4(i);let h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}var Qn=class extends $e{constructor(t,e,i,s,r,a,o,c,h){super(t,e,i,s,r,a,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},ti=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,c=r-1,h;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),h=i[s]-a,h<0)o=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);let l=i[s],E=i[s+1]-l,_=(a-l)/E;return(s+_)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new ut:new z);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new z,s=[],r=[],a=[],o=new z,c=new ie;for(let _=0;_<=t;_++){let m=_/t;s[_]=this.getTangentAt(m,new z)}r[0]=new z,a[0]=new z;let h=Number.MAX_VALUE,l=Math.abs(s[0].x),u=Math.abs(s[0].y),E=Math.abs(s[0].z);l<=h&&(h=l,i.set(1,0,0)),u<=h&&(h=u,i.set(0,1,0)),E<=h&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let _=1;_<=t;_++){if(r[_]=r[_-1].clone(),a[_]=a[_-1].clone(),o.crossVectors(s[_-1],s[_]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Me(s[_-1].dot(s[_]),-1,1));r[_].applyMatrix4(c.makeRotationAxis(o,m))}a[_].crossVectors(s[_],r[_])}if(e===!0){let _=Math.acos(Me(r[0].dot(r[t]),-1,1));_/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(_=-_);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],_*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Cs=class extends ti{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){let i=e||new ut,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let l=Math.cos(this.aRotation),u=Math.sin(this.aRotation),E=c-this.aX,_=h-this.aY;c=E*l-_*u+this.aX,h=E*u+_*l+this.aY}return i.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},rc=class extends Cs{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Rc(){let n=0,t=0,e=0,i=0;function s(r,a,o,c){n=r,t=o,e=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,h){s(a,o,h*(o-r),h*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,h,l,u){let E=(a-r)/h-(o-r)/(h+l)+(o-a)/l,_=(o-a)/l-(c-a)/(l+u)+(c-o)/u;E*=l,_*=l,s(a,o,E,_)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var Ar=new z,wa=new Rc,Ia=new Rc,za=new Rc,oc=class extends ti{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new z){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let h,l;this.closed||o>0?h=s[(o-1)%r]:(Ar.subVectors(s[0],s[1]).add(s[0]),h=Ar);let u=s[o%r],E=s[(o+1)%r];if(this.closed||o+2<r?l=s[(o+2)%r]:(Ar.subVectors(s[r-1],s[r-2]).add(s[r-1]),l=Ar),this.curveType==="centripetal"||this.curveType==="chordal"){let _=this.curveType==="chordal"?.5:.25,m=Math.pow(h.distanceToSquared(u),_),p=Math.pow(u.distanceToSquared(E),_),f=Math.pow(E.distanceToSquared(l),_);p<1e-4&&(p=1),m<1e-4&&(m=p),f<1e-4&&(f=p),wa.initNonuniformCatmullRom(h.x,u.x,E.x,l.x,m,p,f),Ia.initNonuniformCatmullRom(h.y,u.y,E.y,l.y,m,p,f),za.initNonuniformCatmullRom(h.z,u.z,E.z,l.z,m,p,f)}else this.curveType==="catmullrom"&&(wa.initCatmullRom(h.x,u.x,E.x,l.x,this.tension),Ia.initCatmullRom(h.y,u.y,E.y,l.y,this.tension),za.initCatmullRom(h.z,u.z,E.z,l.z,this.tension));return i.set(wa.calc(c),Ia.calc(c),za.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Nl(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,c=n*o;return(2*e-2*i+r+a)*c+(-3*e+3*i-2*r-a)*o+r*n+e}function sQ(n,t){let e=1-n;return e*e*t}function rQ(n,t){return 2*(1-n)*n*t}function oQ(n,t){return n*n*t}function ks(n,t,e,i){return sQ(n,t)+rQ(n,e)+oQ(n,i)}function aQ(n,t){let e=1-n;return e*e*e*t}function cQ(n,t){let e=1-n;return 3*e*e*n*t}function hQ(n,t){return 3*(1-n)*n*n*t}function lQ(n,t){return n*n*n*t}function ws(n,t,e,i,s){return aQ(n,t)+cQ(n,e)+hQ(n,i)+lQ(n,s)}var lo=class extends ti{constructor(t=new ut,e=new ut,i=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ut){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ws(t,s.x,r.x,a.x,o.x),ws(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ac=class extends ti{constructor(t=new z,e=new z,i=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new z){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ws(t,s.x,r.x,a.x,o.x),ws(t,s.y,r.y,a.y,o.y),ws(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},uo=class extends ti{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},cc=class extends ti{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Eo=class extends ti{constructor(t=new ut,e=new ut,i=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ut){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(ks(t,s.x,r.x,a.x),ks(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},hc=class extends ti{constructor(t=new z,e=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new z){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(ks(t,s.x,r.x,a.x),ks(t,s.y,r.y,a.y),ks(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fo=class extends ti{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],h=s[a],l=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(Nl(o,c.x,h.x,l.x,u.x),Nl(o,c.y,h.y,l.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new ut().fromArray(s))}return this}},lc=Object.freeze({__proto__:null,ArcCurve:rc,CatmullRomCurve3:oc,CubicBezierCurve:lo,CubicBezierCurve3:ac,EllipseCurve:Cs,LineCurve:uo,LineCurve3:cc,QuadraticBezierCurve:Eo,QuadraticBezierCurve3:hc,SplineCurve:fo}),uc=class extends ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new lc[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],c=o.getLength(),h=c===0?0:1-a/c;return o.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let h=0;h<c.length;h++){let l=c[h];i&&i.equals(l)||(e.push(l),i=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new lc[s.type]().fromJSON(s))}return this}},_o=class extends uc{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new uo(this.currentPoint.clone(),new ut(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Eo(this.currentPoint.clone(),new ut(t,e),new ut(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new lo(this.currentPoint.clone(),new ut(t,e),new ut(i,s),new ut(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new fo(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,c){let h=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(t+h,e+l,i,s,r,a,o,c),this}absellipse(t,e,i,s,r,a,o,c){let h=new Cs(t,e,i,s,r,a,o,c);if(this.curves.length>0){let u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);let l=h.getPoint(1);return this.currentPoint.copy(l),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var mo=class n extends ke{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],h=new z,l=new ut;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,E=3;u<=e;u++,E+=3){let _=i+u/e*s;h.x=t*Math.cos(_),h.y=t*Math.sin(_),a.push(h.x,h.y,h.z),o.push(0,0,1),l.x=(a[E]/t+1)/2,l.y=(a[E+1]/t+1)/2,c.push(l.x,l.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(o,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}};var Tr=new z,Fr=new z,Ga=new z,br=new dn,po=class extends ke{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(Nr*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,h=[0,0,0],l=["a","b","c"],u=new Array(3),E={},_=[];for(let m=0;m<c;m+=3){a?(h[0]=a.getX(m),h[1]=a.getX(m+1),h[2]=a.getX(m+2)):(h[0]=m,h[1]=m+1,h[2]=m+2);let{a:p,b:f,c:d}=br;if(p.fromBufferAttribute(o,h[0]),f.fromBufferAttribute(o,h[1]),d.fromBufferAttribute(o,h[2]),br.getNormal(Ga),u[0]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,u[1]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,u[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let O=0;O<3;O++){let x=(O+1)%3,v=u[O],R=u[x],w=br[l[O]],I=br[l[x]],$=`${v}_${R}`,y=`${R}_${v}`;y in E&&E[y]?(Ga.dot(E[y].normal)<=r&&(_.push(w.x,w.y,w.z),_.push(I.x,I.y,I.z)),E[y]=null):$ in E||(E[$]={index0:h[O],index1:h[x],normal:Ga.clone()})}}for(let m in E)if(E[m]){let{index0:p,index1:f}=E[m];Tr.fromBufferAttribute(o,p),Fr.fromBufferAttribute(o,f),_.push(Tr.x,Tr.y,Tr.z),_.push(Fr.x,Fr.y,Fr.z)}this.setAttribute("position",new ae(_,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},Us=class extends _o{constructor(t){super(t),this.uuid=rs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new _o().fromJSON(s))}return this}},uQ={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=xu(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,h,l,u,E,_;if(i&&(r=mQ(n,t,r,e)),n.length>80*e){o=h=n[0],c=l=n[1];for(let m=e;m<s;m+=e)u=n[m],E=n[m+1],u<o&&(o=u),E<c&&(c=E),u>h&&(h=u),E>l&&(l=E);_=Math.max(h-o,l-c),_=_!==0?32767/_:0}return Vs(r,a,e,o,c,_,0),a}};function xu(n,t,e,i,s){let r,a;if(s===kQ(n,t,e,i)>0)for(r=t;r<e;r+=i)a=jl(r,n[r],n[r+1],a);else for(r=e-i;r>=t;r-=i)a=jl(r,n[r],n[r+1],a);return a&&wo(a,a.next)&&(js(a),a=a.next),a}function xn(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(wo(e,e.next)||oe(e.prev,e,e.next)===0)){if(js(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Vs(n,t,e,i,s,r,a){if(!n)return;!a&&r&&MQ(n,i,s,r);let o=n,c,h;for(;n.prev!==n.next;){if(c=n.prev,h=n.next,r?dQ(n,i,s,r):EQ(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(h.i/e|0),js(n),n=h.next,o=h.next;continue}if(n=h,n===o){a?a===1?(n=fQ(xn(n),t,e),Vs(n,t,e,i,s,r,2)):a===2&&_Q(n,t,e,i,s,r):Vs(xn(n),t,e,i,s,r,1);break}}}function EQ(n){let t=n.prev,e=n,i=n.next;if(oe(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,c=e.y,h=i.y,l=s<r?s<a?s:a:r<a?r:a,u=o<c?o<h?o:h:c<h?c:h,E=s>r?s>a?s:a:r>a?r:a,_=o>c?o>h?o:h:c>h?c:h,m=i.next;for(;m!==t;){if(m.x>=l&&m.x<=E&&m.y>=u&&m.y<=_&&Ln(s,o,r,c,a,h,m.x,m.y)&&oe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function dQ(n,t,e,i){let s=n.prev,r=n,a=n.next;if(oe(s,r,a)>=0)return!1;let o=s.x,c=r.x,h=a.x,l=s.y,u=r.y,E=a.y,_=o<c?o<h?o:h:c<h?c:h,m=l<u?l<E?l:E:u<E?u:E,p=o>c?o>h?o:h:c>h?c:h,f=l>u?l>E?l:E:u>E?u:E,d=Ec(_,m,t,e,i),O=Ec(p,f,t,e,i),x=n.prevZ,v=n.nextZ;for(;x&&x.z>=d&&v&&v.z<=O;){if(x.x>=_&&x.x<=p&&x.y>=m&&x.y<=f&&x!==s&&x!==a&&Ln(o,l,c,u,h,E,x.x,x.y)&&oe(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=_&&v.x<=p&&v.y>=m&&v.y<=f&&v!==s&&v!==a&&Ln(o,l,c,u,h,E,v.x,v.y)&&oe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=d;){if(x.x>=_&&x.x<=p&&x.y>=m&&x.y<=f&&x!==s&&x!==a&&Ln(o,l,c,u,h,E,x.x,x.y)&&oe(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=O;){if(v.x>=_&&v.x<=p&&v.y>=m&&v.y<=f&&v!==s&&v!==a&&Ln(o,l,c,u,h,E,v.x,v.y)&&oe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function fQ(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!wo(s,r)&&gu(s,i,i.next,r)&&Ns(s,r)&&Ns(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),js(i),js(i.next),i=n=r),i=i.next}while(i!==n);return xn(i)}function _Q(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&SQ(a,o)){let c=Mu(a,o);a=xn(a,a.next),c=xn(c,c.next),Vs(a,t,e,i,s,r,0),Vs(c,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function mQ(n,t,e,i){let s=[],r,a,o,c,h;for(r=0,a=t.length;r<a;r++)o=t[r]*i,c=r<a-1?t[r+1]*i:n.length,h=xu(n,o,c,i,!1),h===h.next&&(h.steiner=!0),s.push(OQ(h));for(s.sort(pQ),r=0;r<s.length;r++)e=QQ(s[r],e);return e}function pQ(n,t){return n.x-t.x}function QQ(n,t){let e=xQ(n,t);if(!e)return t;let i=Mu(e,n);return xn(i,i.next),xn(e,e.next)}function xQ(n,t){let e=t,i=-1/0,s,r=n.x,a=n.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let E=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(E<=r&&E>i&&(i=E,s=e.x<e.next.x?e:e.next,E===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,c=s.x,h=s.y,l=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Ln(a<h?r:i,a,c,h,a<h?i:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Ns(e,n)&&(u<l||u===l&&(e.x>s.x||e.x===s.x&&gQ(s,e)))&&(s=e,l=u)),e=e.next;while(e!==o);return s}function gQ(n,t){return oe(n.prev,n,t.prev)<0&&oe(t.next,n,n.next)<0}function MQ(n,t,e,i){let s=n;do s.z===0&&(s.z=Ec(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,yQ(s)}function yQ(n){let t,e,i,s,r,a,o,c,h=1;do{for(e=n,n=null,r=null,a=0;e;){for(a++,i=e,o=0,t=0;t<h&&(o++,i=i.nextZ,!!i);t++);for(c=h;o>0||c>0&&i;)o!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,o--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,h*=2}while(a>1);return n}function Ec(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function OQ(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Ln(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function SQ(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!vQ(n,t)&&(Ns(n,t)&&Ns(t,n)&&PQ(n,t)&&(oe(n.prev,n,t.prev)||oe(n,t.prev,t))||wo(n,t)&&oe(n.prev,n,n.next)>0&&oe(t.prev,t,t.next)>0)}function oe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function wo(n,t){return n.x===t.x&&n.y===t.y}function gu(n,t,e,i){let s=Ur(oe(n,t,e)),r=Ur(oe(n,t,i)),a=Ur(oe(e,i,n)),o=Ur(oe(e,i,t));return!!(s!==r&&a!==o||s===0&&Cr(n,e,t)||r===0&&Cr(n,i,t)||a===0&&Cr(e,n,i)||o===0&&Cr(e,t,i))}function Cr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ur(n){return n>0?1:n<0?-1:0}function vQ(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&gu(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Ns(n,t){return oe(n.prev,n,n.next)<0?oe(n,t,n.next)>=0&&oe(n,n.prev,t)>=0:oe(n,t,n.prev)<0||oe(n,n.next,t)<0}function PQ(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Mu(n,t){let e=new dc(n.i,n.x,n.y),i=new dc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function jl(n,t,e,i){let s=new dc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function js(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function dc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function kQ(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Is=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Kl(t),Hl(i,t);let a=t.length;e.forEach(Kl);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Hl(i,e[c]);let o=uQ.triangulate(i,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Kl(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Hl(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Qo=class n extends ke{constructor(t=new Us([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let h=t[o];a(h)}this.setAttribute("position",new ae(s,3)),this.setAttribute("uv",new ae(r,2)),this.computeVertexNormals();function a(o){let c=[],h=e.curveSegments!==void 0?e.curveSegments:12,l=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,E=e.bevelEnabled!==void 0?e.bevelEnabled:!0,_=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:_-.1,p=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3,d=e.extrudePath,O=e.UVGenerator!==void 0?e.UVGenerator:wQ,x,v=!1,R,w,I,$;d&&(x=d.getSpacedPoints(l),v=!0,E=!1,R=d.computeFrenetFrames(l,!1),w=new z,I=new z,$=new z),E||(f=0,_=0,m=0,p=0);let y=o.extractPoints(h),S=y.shape,C=y.holes;if(!Is.isClockWise(S)){S=S.reverse();for(let k=0,ot=C.length;k<ot;k++){let P=C[k];Is.isClockWise(P)&&(C[k]=P.reverse())}}let rt=Is.triangulateShape(S,C),W=S;for(let k=0,ot=C.length;k<ot;k++){let P=C[k];S=S.concat(P)}function b(k,ot,P){return ot||console.error("THREE.ExtrudeGeometry: vec does not exist"),k.clone().addScaledVector(ot,P)}let K=S.length,X=rt.length;function J(k,ot,P){let T,Z,H,st=k.x-ot.x,g=k.y-ot.y,Q=P.x-k.x,A=P.y-k.y,D=st*st+g*g,Y=st*A-g*Q;if(Math.abs(Y)>Number.EPSILON){let L=Math.sqrt(D),dt=Math.sqrt(Q*Q+A*A),ht=ot.x-g/L,Qt=ot.y+st/L,lt=P.x-A/dt,Pt=P.y+Q/dt,tt=((lt-ht)*A-(Pt-Qt)*Q)/(st*A-g*Q);T=ht+st*tt-k.x,Z=Qt+g*tt-k.y;let jt=T*T+Z*Z;if(jt<=2)return new ut(T,Z);H=Math.sqrt(jt/2)}else{let L=!1;st>Number.EPSILON?Q>Number.EPSILON&&(L=!0):st<-Number.EPSILON?Q<-Number.EPSILON&&(L=!0):Math.sign(g)===Math.sign(A)&&(L=!0),L?(T=-g,Z=st,H=Math.sqrt(D)):(T=st,Z=g,H=Math.sqrt(D/2))}return new ut(T/H,Z/H)}let q=[];for(let k=0,ot=W.length,P=ot-1,T=k+1;k<ot;k++,P++,T++)P===ot&&(P=0),T===ot&&(T=0),q[k]=J(W[k],W[P],W[T]);let B=[],nt,ft=q.concat();for(let k=0,ot=C.length;k<ot;k++){let P=C[k];nt=[];for(let T=0,Z=P.length,H=Z-1,st=T+1;T<Z;T++,H++,st++)H===Z&&(H=0),st===Z&&(st=0),nt[T]=J(P[T],P[H],P[st]);B.push(nt),ft=ft.concat(nt)}for(let k=0;k<f;k++){let ot=k/f,P=_*Math.cos(ot*Math.PI/2),T=m*Math.sin(ot*Math.PI/2)+p;for(let Z=0,H=W.length;Z<H;Z++){let st=b(W[Z],q[Z],T);pt(st.x,st.y,-P)}for(let Z=0,H=C.length;Z<H;Z++){let st=C[Z];nt=B[Z];for(let g=0,Q=st.length;g<Q;g++){let A=b(st[g],nt[g],T);pt(A.x,A.y,-P)}}}let j=m+p;for(let k=0;k<K;k++){let ot=E?b(S[k],ft[k],j):S[k];v?(I.copy(R.normals[0]).multiplyScalar(ot.x),w.copy(R.binormals[0]).multiplyScalar(ot.y),$.copy(x[0]).add(I).add(w),pt($.x,$.y,$.z)):pt(ot.x,ot.y,0)}for(let k=1;k<=l;k++)for(let ot=0;ot<K;ot++){let P=E?b(S[ot],ft[ot],j):S[ot];v?(I.copy(R.normals[k]).multiplyScalar(P.x),w.copy(R.binormals[k]).multiplyScalar(P.y),$.copy(x[k]).add(I).add(w),pt($.x,$.y,$.z)):pt(P.x,P.y,u/l*k)}for(let k=f-1;k>=0;k--){let ot=k/f,P=_*Math.cos(ot*Math.PI/2),T=m*Math.sin(ot*Math.PI/2)+p;for(let Z=0,H=W.length;Z<H;Z++){let st=b(W[Z],q[Z],T);pt(st.x,st.y,u+P)}for(let Z=0,H=C.length;Z<H;Z++){let st=C[Z];nt=B[Z];for(let g=0,Q=st.length;g<Q;g++){let A=b(st[g],nt[g],T);v?pt(A.x,A.y+x[l-1].y,x[l-1].x+P):pt(A.x,A.y,u+P)}}}et(),Et();function et(){let k=s.length/3;if(E){let ot=0,P=K*ot;for(let T=0;T<X;T++){let Z=rt[T];wt(Z[2]+P,Z[1]+P,Z[0]+P)}ot=l+f*2,P=K*ot;for(let T=0;T<X;T++){let Z=rt[T];wt(Z[0]+P,Z[1]+P,Z[2]+P)}}else{for(let ot=0;ot<X;ot++){let P=rt[ot];wt(P[2],P[1],P[0])}for(let ot=0;ot<X;ot++){let P=rt[ot];wt(P[0]+K*l,P[1]+K*l,P[2]+K*l)}}i.addGroup(k,s.length/3-k,0)}function Et(){let k=s.length/3,ot=0;Ot(W,ot),ot+=W.length;for(let P=0,T=C.length;P<T;P++){let Z=C[P];Ot(Z,ot),ot+=Z.length}i.addGroup(k,s.length/3-k,1)}function Ot(k,ot){let P=k.length;for(;--P>=0;){let T=P,Z=P-1;Z<0&&(Z=k.length-1);for(let H=0,st=l+f*2;H<st;H++){let g=K*H,Q=K*(H+1),A=ot+T+g,D=ot+Z+g,Y=ot+Z+Q,L=ot+T+Q;Rt(A,D,Y,L)}}}function pt(k,ot,P){c.push(k),c.push(ot),c.push(P)}function wt(k,ot,P){yt(k),yt(ot),yt(P);let T=s.length/3,Z=O.generateTopUV(i,s,T-3,T-2,T-1);Wt(Z[0]),Wt(Z[1]),Wt(Z[2])}function Rt(k,ot,P,T){yt(k),yt(ot),yt(T),yt(ot),yt(P),yt(T);let Z=s.length/3,H=O.generateSideWallUV(i,s,Z-6,Z-3,Z-2,Z-1);Wt(H[0]),Wt(H[1]),Wt(H[3]),Wt(H[1]),Wt(H[2]),Wt(H[3])}function yt(k){s.push(c[k*3+0]),s.push(c[k*3+1]),s.push(c[k*3+2])}function Wt(k){r.push(k.x),r.push(k.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return IQ(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new lc[s.type]().fromJSON(s)),new n(i,t.options)}},wQ={generateTopUV:function(n,t,e,i,s){let r=t[e*3],a=t[e*3+1],o=t[i*3],c=t[i*3+1],h=t[s*3],l=t[s*3+1];return[new ut(r,a),new ut(o,c),new ut(h,l)]},generateSideWallUV:function(n,t,e,i,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],h=t[i*3],l=t[i*3+1],u=t[i*3+2],E=t[s*3],_=t[s*3+1],m=t[s*3+2],p=t[r*3],f=t[r*3+1],d=t[r*3+2];return Math.abs(o-l)<Math.abs(a-h)?[new ut(a,1-c),new ut(h,1-u),new ut(E,1-m),new ut(p,1-d)]:[new ut(o,1-c),new ut(l,1-u),new ut(_,1-m),new ut(f,1-d)]}};function IQ(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Zi=class n extends ke{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),h=0,l=[],u=new z,E=new z,_=[],m=[],p=[],f=[];for(let d=0;d<=i;d++){let O=[],x=d/i,v=0;d===0&&a===0?v=.5/e:d===i&&c===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){let w=R/e;u.x=-t*Math.cos(s+w*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(s+w*r)*Math.sin(a+x*o),m.push(u.x,u.y,u.z),E.copy(u).normalize(),p.push(E.x,E.y,E.z),f.push(w+v,1-x),O.push(h++)}l.push(O)}for(let d=0;d<i;d++)for(let O=0;O<e;O++){let x=l[d][O+1],v=l[d][O],R=l[d+1][O],w=l[d+1][O+1];(d!==0||a>0)&&_.push(x,v,w),(d!==i-1||c<Math.PI)&&_.push(v,R,w)}this.setIndex(_),this.setAttribute("position",new ae(m,3)),this.setAttribute("normal",new ae(p,3)),this.setAttribute("uv",new ae(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ai=class n extends ke{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let a=[],o=[],c=[],h=[],l=new z,u=new z,E=new z;for(let _=0;_<=i;_++)for(let m=0;m<=s;m++){let p=m/s*r,f=_/i*Math.PI*2;u.x=(t+e*Math.cos(f))*Math.cos(p),u.y=(t+e*Math.cos(f))*Math.sin(p),u.z=e*Math.sin(f),o.push(u.x,u.y,u.z),l.x=t*Math.cos(p),l.y=t*Math.sin(p),E.subVectors(u,l).normalize(),c.push(E.x,E.y,E.z),h.push(m/s),h.push(_/i)}for(let _=1;_<=i;_++)for(let m=1;m<=s;m++){let p=(s+1)*_+m-1,f=(s+1)*(_-1)+m-1,d=(s+1)*(_-1)+m,O=(s+1)*_+m;a.push(p,f,O),a.push(f,d,O)}this.setIndex(a),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var xo=class extends di{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new vt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};var Ve=class extends di{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cu,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},go=class extends Ve{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ut(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new vt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new vt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new vt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Vr(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function zQ(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ss=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fc=class extends ss{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jh,endingEnd:jh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Kh:r=t,o=2*e-i;break;case Hh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Kh:a=t,c=2*i-e;break;case Hh:a=1,c=i+s[1]-s[0];break;default:a=t-1,c=e}let h=(i-e)*.5,l=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(c-i),this._offsetPrev=r*l,this._offsetNext=a*l}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,l=this._offsetPrev,u=this._offsetNext,E=this._weightPrev,_=this._weightNext,m=(i-e)/(s-e),p=m*m,f=p*m,d=-E*f+2*E*p-E*m,O=(1+E)*f+(-1.5-2*E)*p+(-.5+E)*m+1,x=(-1-_)*f+(1.5+_)*p+.5*m,v=_*f-_*p;for(let R=0;R!==o;++R)r[R]=d*a[l+R]+O*a[h+R]+x*a[c+R]+v*a[u+R];return r}},_c=class extends ss{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,l=(i-e)/(s-e),u=1-l;for(let E=0;E!==o;++E)r[E]=a[h+E]*u+a[c+E]*l;return r}},mc=class extends ss{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},hi=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vr(e,this.TimeBufferType),this.values=Vr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Vr(t.times,Array),values:Vr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _c(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new fc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Hr:e=this.InterpolantFactoryMethodDiscrete;break;case qr:e=this.InterpolantFactoryMethodLinear;break;case na:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hr;case this.InterpolantFactoryMethodLinear:return qr;case this.InterpolantFactoryMethodSmooth:return na}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&zQ(s))for(let o=0,c=s.length;o!==c;++o){let h=s[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===na,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,h=t[o],l=t[o+1];if(h!==l&&(o!==1||h!==t[0]))if(s)c=!0;else{let u=o*i,E=u-i,_=u+i;for(let m=0;m!==i;++m){let p=e[u+m];if(p!==e[E+m]||p!==e[_+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*i,E=a*i;for(let _=0;_!==i;++_)e[E+_]=e[u+_]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,c=a*i,h=0;h!==i;++h)e[c+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=qr;var gn=class extends hi{};gn.prototype.ValueTypeName="bool";gn.prototype.ValueBufferType=Array;gn.prototype.DefaultInterpolation=Hr;gn.prototype.InterpolantFactoryMethodLinear=void 0;gn.prototype.InterpolantFactoryMethodSmooth=void 0;var pc=class extends hi{};pc.prototype.ValueTypeName="color";var Qc=class extends hi{};Qc.prototype.ValueTypeName="number";var xc=class extends ss{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-e)/(s-e),h=t*o;for(let l=h+o;h!==l;h+=4)Bi.slerpFlat(r,0,a,h-o,a,h,c);return r}},Ks=class extends hi{InterpolantFactoryMethodLinear(t){return new xc(this.times,this.values,this.getValueSize(),t)}};Ks.prototype.ValueTypeName="quaternion";Ks.prototype.DefaultInterpolation=qr;Ks.prototype.InterpolantFactoryMethodSmooth=void 0;var Mn=class extends hi{};Mn.prototype.ValueTypeName="string";Mn.prototype.ValueBufferType=Array;Mn.prototype.DefaultInterpolation=Hr;Mn.prototype.InterpolantFactoryMethodLinear=void 0;Mn.prototype.InterpolantFactoryMethodSmooth=void 0;var gc=class extends hi{};gc.prototype.ValueTypeName="vector";var ql={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Mc=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(l){o++,r===!1&&s.onStart!==void 0&&s.onStart(l,a,o),r=!0},this.itemEnd=function(l){a++,s.onProgress!==void 0&&s.onProgress(l,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(l){s.onError!==void 0&&s.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,u){return h.push(l,u),this},this.removeHandler=function(l){let u=h.indexOf(l);return u!==-1&&h.splice(u,2),this},this.getHandler=function(l){for(let u=0,E=h.length;u<E;u+=2){let _=h[u],m=h[u+1];if(_.global&&(_.lastIndex=0),_.test(l))return m}return null}}},GQ=new Mc,Hs=class{constructor(t){this.manager=t!==void 0?t:GQ,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Hs.DEFAULT_MATERIAL_NAME="__DEFAULT";var yc=class extends Hs{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=ql.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;let o=Ws("img");function c(){l(),ql.add(t,this),e&&e(this),r.manager.itemEnd(t)}function h(u){l(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function l(){o.removeEventListener("load",c,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}};var qs=class extends Hs{constructor(t){super(t)}load(t,e,i,s){let r=new $e,a=new yc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}},$s=class extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Mo=class extends $s{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ra=new ie,$l=new z,Ll=new z,yo=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new As,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;$l.setFromMatrixPosition(t.matrixWorld),e.position.copy($l),Ll.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ll),e.updateMatrixWorld(),Ra.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ra),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ra)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Jl=new ie,Ss=new z,Wa=new z,Oc=class extends yo{constructor(){super(new ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ut(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ss.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ss),Wa.copy(i.position),Wa.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Wa),i.updateMatrixWorld(),s.makeTranslation(-Ss.x,-Ss.y,-Ss.z),Jl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jl)}},yn=class extends $s{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Oc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Sc=class extends yo{constructor(){super(new ro(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Oo=class extends $s{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new Sc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Wc="\\[\\]\\.:\\/",RQ=new RegExp("["+Wc+"]","g"),Zc="[^"+Wc+"]",WQ="[^"+Wc.replace("\\.","")+"]",ZQ=/((?:WC+[\/:])*)/.source.replace("WC",Zc),AQ=/(WCOD+)?/.source.replace("WCOD",WQ),TQ=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zc),FQ=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zc),bQ=new RegExp("^"+ZQ+AQ+TQ+FQ+"$"),CQ=["material","materials","bones","map"],vc=class{constructor(t,e,i){let s=i||ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ne=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(RQ,"")}static parseTrackName(t){let e=bQ.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);CQ.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=i(o.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===h){h=l;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ne.Composite=vc;ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ne.prototype.GetterByBindingType=[ne.prototype._getValue_direct,ne.prototype._getValue_array,ne.prototype._getValue_arrayElement,ne.prototype._getValue_toArray];ne.prototype.SetterByBindingTypeAndVersioning=[[ne.prototype._setValue_direct,ne.prototype._setValue_direct_setNeedsUpdate,ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_array,ne.prototype._setValue_array_setNeedsUpdate,ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_arrayElement,ne.prototype._setValue_arrayElement_setNeedsUpdate,ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_fromArray,ne.prototype._setValue_fromArray_setNeedsUpdate,ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Px=new Float32Array(1);var So=class{constructor(t,e,i=0,s=1/0){this.ray=new ts(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Zs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return Pc(t,this,i,e),i.sort(Yl),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Pc(t[s],this,i,e);return i.sort(Yl),i}};function Yl(n,t){return n.distance-t.distance}function Pc(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){let s=n.children;for(let r=0,a=s.length;r<a;r++)Pc(s[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Io=class extends ns{constructor(t=null){super();let e=new Ue;e.deleteAttribute("uv");let i=new Ve({side:Pe}),s=new Ve,r=5;t!==null&&t._useLegacyLights===!1&&(r=900);let a=new yn(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new Gt(e,i);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let c=new Gt(e,s);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);let h=new Gt(e,s);h.position.set(-5.607,-.754,-.758),h.rotation.set(0,.994,0),h.scale.set(1.97,1.534,3.955),this.add(h);let l=new Gt(e,s);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let u=new Gt(e,s);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let E=new Gt(e,s);E.position.set(2.291,-.756,-2.621),E.rotation.set(0,-.286,0),E.scale.set(1.546,1.552,1.496),this.add(E);let _=new Gt(e,s);_.position.set(-2.193,-.369,-5.547),_.rotation.set(0,.516,0),_.scale.set(3.875,3.487,2.986),this.add(_);let m=new Gt(e,as(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);let p=new Gt(e,as(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);let f=new Gt(e,as(17));f.position.set(14.904,12.198,-1.832),f.scale.set(.15,4.265,6.331),this.add(f);let d=new Gt(e,as(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let O=new Gt(e,as(20));O.position.set(3.235,11.486,-12.541),O.scale.set(2.5,2,.1),this.add(O);let x=new Gt(e,as(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function as(n){let t=new _e;return t.color.setScalar(n),t}var yu="./tex/planet.jpg";var Ou="./tex/f_PRIME.jpg";var Su="./tex/f_PLUS.jpg";var vu="./tex/f_CORE.jpg";var Pu="./tex/s_PRIME.jpg";var ku="./tex/s_PLUS.jpg";var wu="./tex/s_CORE.jpg";var Iu="./tex/c_PRIME.jpg";var zu="./tex/c_PLUS.jpg";var Gu="./tex/c_CORE.jpg";var je=[{k:"CORE",col:51530,css:"#00b844",css2:"#008a34",f:vu,s:wu,c:Gu},{k:"PLUS",col:43775,css:"#0a9cf0",css2:"#0062c4",f:Su,s:ku,c:zu},{k:"PRIME",col:16719560,css:"#ff1ec8",css2:"#b0128a",f:Ou,s:Pu,c:Iu}],xi=new URLSearchParams(location.search),Ci=xi.get("snap")==="1";try{history.scrollRestoration="manual"}catch{}var Xu=(()=>{let n={B:1,SPAN:1,BR:1,I:1,EM:1,SMALL:1,U:1,STRONG:1},t=[],e=s=>{for(let r of s.querySelectorAll("*"))if(!n[r.tagName])return!1;return!0},i=s=>{let r=s.tagName;if(!(r==="SCRIPT"||r==="STYLE"||r==="svg"||r==="VIDEO"||r==="IMG"||r==="CANVAS"||s.id==="boot")){if(e(s)){s.textContent.trim()&&t.push({e:s,h:s.innerHTML});return}for(let a of[...s.childNodes])a.nodeType===3?a.nodeValue.trim()&&t.push({n:a,h:a.nodeValue}):a.nodeType===1&&i(a)}};return i(document.body),t})();window.__i18n=()=>Xu.map(n=>n.h);var Go="it",Ru=xi.get("chp")||"k",XQ=xi.get("chd")==="1";Ru&&document.documentElement.classList.add("chp-"+Ru);var Xs=document.getElementById("gl"),ii=new Ts({canvas:Xs,antialias:!0,alpha:!0,preserveDrawingBuffer:Ci}),us=devicePixelRatio||1,Yc=Math.min(innerWidth,innerHeight)<700,en=Ci?Math.min(Math.max(us*1.6,2),3):Yc?Math.min(us,2.5):Math.min(Math.max(us*1.5,1.5),2.25),DQ=Ci?en:Yc?Math.min(us,2):Math.min(us,1.25),Wu=Yc?Math.min(us,1.5):1,BQ=en,Ac=en,Vc=0,Nc=-1;ii.setPixelRatio(BQ);ii.toneMapping=wc;ii.toneMappingExposure=.95;ii.shadowMap.enabled=!0;ii.shadowMap.type=kc;ii.localClippingEnabled=!0;var ue=new ns;ue.environment=new is(ii).fromScene(new Io,.04).texture;var Ae=new ve(26,1,.1,100);ue.add(new Mo(16777215,15131882,.6));var kn=new Oo(16777215,1.5);kn.position.set(-3,6,5);kn.castShadow=!0;kn.shadow.mapSize.set(1024,1024);Object.assign(kn.shadow.camera,{left:-5,right:5,top:5,bottom:-3,near:1,far:20});kn.shadow.radius=7;kn.shadow.bias=-4e-4;ue.add(kn);var To=document.createElement("canvas");To.width=To.height=256;{let n=To.getContext("2d"),t=n.createRadialGradient(128,128,0,128,128,128);t.addColorStop(0,"#fff"),t.addColorStop(.45,"#bbb"),t.addColorStop(1,"#000"),n.fillStyle=t,n.fillRect(0,0,256,256)}var tr=new Gt(new fi(16,16),new Ve({color:262917,roughness:.75,metalness:0,transparent:!0,opacity:0,alphaMap:new Qn(To),depthWrite:!1}));tr.rotation.x=-Math.PI/2;tr.position.y=-.143;ue.add(tr);var Fo=new yn(16777215,0,9),bo=new yn(16777215,0,9);Fo.position.set(2.6,1.9,-1.4);bo.position.set(-2.4,1.3,1.2);ue.add(Fo,bo);var tx=ue.children.find(n=>n.isHemisphereLight),rr=new Gt(new fi(60,60),new xo({opacity:.16}));rr.rotation.x=-Math.PI/2;rr.position.y=-.142;rr.receiveShadow=!0;ue.add(rr);var ex=new qs,ix=ii.capabilities.getMaxAnisotropy(),jc=n=>{let t=ex.load(n);return t.colorSpace=le,t.anisotropy=ix,t},Zu=n=>(n.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <map_fragment>",Ut.map_fragment.replace("texture2D( map, vMapUv )","texture2D( map, vMapUv, -1.0 )"))},n),Xc=n=>new Ve(n),_i=(n,t=0,e=1)=>Math.max(t,Math.min(e,n)),Mt=(n,t,e)=>{let i=_i((e-n)/(t-n));return i*i*(3-2*i)},Lt=(n,t,e)=>n+(t-n)*e;function nx(n){let t=new Ce,e=[],i=m=>{let p=Xc(m);return e.push(p),p},s=i({color:16053238,roughness:.5}),r=i({color:1183764,roughness:.4}),a=i({color:n.col,roughness:.5}),o=[],c=(m,p,f,d,O,x,v=[0,0,0])=>{let R=new Gt(new Ue(m,p,f),d);return R.position.set(...O),R.rotation.set(...v),R.castShadow=!0,t.add(R),o.push({q:R,p:new z(...O),n:new z(...x),rot:v}),R},h=c(.86,1.08,.008,[s,s,s,s,Zu(i({map:jc(n.f),roughness:.6,envMapIntensity:.5})),r],[0,.54,.12],[0,0,.55]);c(.86,1.08,.008,s,[0,.54,-.12],[0,0,-.55]),c(.86,.008,.24,s,[0,1.08,0],[0,.45,0]),c(.86,.008,.24,s,[0,0,0],[0,-.22,0]),c(.008,1.08,.24,s,[-.43,.54,0],[-.6,0,0]);let l=new Ce;t.add(l);let u=new Gt(new Ue(.008,1.06,.225),[Zu(i({map:jc(n.s),roughness:.5})),r,r,r,r,r]);u.position.set(.43,.54,0),u.castShadow=!0,l.add(u);let E=new Gt(new Ue(.84,1.05,.2),r);E.position.set(0,.54,-.008),l.add(E);let _=new Gt(new Ue(.84,.012,.215),a);return _.position.set(0,.02,0),l.add(_),t.userData={P:n,parts:o,tray:l,mats:e,front:h,set(m,p){o.forEach(f=>{f.q.position.copy(f.p).addScaledVector(f.n,m),f.q.rotation.set(f.rot[0]+f.n.y*m*.5,f.rot[1]+f.n.x*m*.7,f.rot[2]+f.n.z*m*.12)}),l.position.x=p*.3+m*.8}},t}function sx(n){let s=new Us;s.moveTo(-.25/2+.016,-.3965/2),s.lineTo(.25/2-.016,-.3965/2),s.quadraticCurveTo(.25/2,-.3965/2,.25/2,-.3965/2+.016),s.lineTo(.25/2,.3965/2-.016),s.quadraticCurveTo(.25/2,.3965/2,.25/2-.016,.3965/2),s.lineTo(-.25/2+.016,.3965/2),s.quadraticCurveTo(-.25/2,.3965/2,-.25/2,.3965/2-.016),s.lineTo(-.25/2,-.3965/2+.016),s.quadraticCurveTo(-.25/2,-.3965/2,-.25/2+.016,-.3965/2);let r=new Qo(s,{depth:.004,bevelEnabled:!1,curveSegments:8}),a=r.attributes.position,o=r.attributes.uv;for(let h=0;h<o.count;h++)o.setXY(h,(a.getX(h)+.25/2)/.25,(a.getY(h)+.3965/2)/.3965);let c=new Gt(r,[new go({map:jc(n.c),roughness:.25,clearcoat:1,clearcoatRoughness:.15}),Xc({color:9079958,metalness:.8,roughness:.3})]);return c.castShadow=!0,c}var er=je.map(nx),Du=je.map(sx);er.forEach(n=>ue.add(n));Du.forEach(n=>ue.add(n));var rx=[.2,.5,.8],ox=je.map((n,t)=>{let e=new Ce,i=new Gt(new Ue(1,1,1.1),Xc({color:1512731,roughness:.4}));i.castShadow=i.receiveShadow=!0,e.add(i);let s=new Gt(new Ue(1,.02,.03),new _e({color:new vt(n.col).multiplyScalar(1.7)}));return e.add(s),e.userData={b:i,e:s},ue.add(e),e}),Ro=-1,Tc=0,pi=new Ce,ax=new Gt(new Ai(.8,.004,6,96),new _e({color:12171201})),Wo=new Gt(new Ai(.8,.012,8,64,.01),new _e({color:16777215})),Kc=new Gt(new Zi(.035,16,12),new _e({color:16777215}));pi.add(ax,Wo,Kc);var Yx=[1.05,1.24,1.43].map(n=>{let t=new Gt(new Ai(.8*n,.0035,6,128),new _e({color:12171201,transparent:!0}));return pi.add(t),t}),Zo=new Gt(new Ai(.8,.006,6,128),new _e({color:16777215,transparent:!0}));pi.add(Zo);var Co=64,tn=new pn(new Zi(1,12,8),new Ve({color:16777215,roughness:.18}),Co);tn.frustumCulled=!1;ue.add(tn);var Hc=[];for(let n=0;n<Co;n++)Hc.push({a:Math.random()*6.283,R:[.8,.8,.848,1.056][n%4],y0:Math.random(),v:.045+Math.random()*.06,r:.011+Math.random()*.017,d:Math.random()<.4});var Au=-1;pi.rotation.x=-Math.PI/2;ue.add(pi);var Tu=-1,Fc=[0,0,0],Dc=450,Es=new pn(new Zi(1,12,8),new Ve({color:16777215,roughness:.18}),Dc);Es.frustumCulled=!1;ue.add(Es);var Bu=[];for(let n=0;n<Dc;n++){let t=n%3;Bu.push({k:t,x:Math.random()-.5,z:-.45+(Math.random()-.5)*.6,y0:Math.random()*2.8,v:.05+Math.random()*.12,r:.014+Math.random()*.026}),Es.setColorAt(n,Math.random()<.62?new vt(je[t].col):new vt(723470))}var cx=je.map(n=>{let t=new Ce,e=document.createElement("canvas");e.width=e.height=128;let i=e.getContext("2d"),s=new vt(n.col),r=`${s.r*255|0},${s.g*255|0},${s.b*255|0}`,a=i.createRadialGradient(64,64,0,64,64,64);a.addColorStop(0,`rgba(${r},.8)`),a.addColorStop(.5,`rgba(${r},.32)`),a.addColorStop(1,`rgba(${r},0)`),i.fillStyle=a,i.fillRect(0,0,128,128);let o=new Qn(e);o.colorSpace=le;let c=new Gt(new mo(.74,40),new _e({map:o,transparent:!0,depthWrite:!1}));c.rotation.x=-Math.PI/2;let h=new Gt(new Ai(.5,.011,8,72),new _e({color:new vt(n.col).multiplyScalar(1.5),transparent:!0}));return h.rotation.x=-Math.PI/2,h.position.y=.012,t.add(c,h),t.position.y=-.134,ue.add(t),{g:t,d:c,t:h}}),Uo=new Gt(new fi(90,30),new _e({color:328711,transparent:!0}));Uo.position.set(0,3,-3.3);ue.add(Uo);var Ds=24,Bc=new qs().load(yu);Bc.colorSpace=le;var ir=Bc.clone();ir.wrapS=ir.wrapT=zs;ir.repeat.set(26,13);var Te=new Gt(new fi(9,9),new _e({map:Bc,transparent:!0}));Te.position.set(0,.9,-3);ue.add(Te);var hx=[[1,0,.9,.55,0],[.5,0,.95,.9,0],[.3,0,2.75,1,0],[.44,0,.55,.9,0],[.26,.78,2.9,1,0],[.26,-.78,2.9,1,0],[.4,0,2.35,1,0],[.5,0,.95,.9,1],[.62,0,-1.15,.9,1],[.36,0,1.75,1,0],[.5,0,1.5,1,1]],lx=Math.min(10,+xi.get("mp")||6);{let n=document.createElement("canvas");n.width=n.height=256;let t=n.getContext("2d"),e=t.createRadialGradient(128,128,0,128,128,128);e.addColorStop(0,"#fff"),e.addColorStop(.7,"#fff"),e.addColorStop(.93,"#000"),e.addColorStop(1,"#000"),t.fillStyle=e,t.fillRect(0,0,256,256),Te.userData.am=new Qn(n)}var qc=-1,ds=new Ce;ue.add(ds);var nr=[],Bs=null,Vo=xi.get("fx")==null?36:+xi.get("fx"),Je={op:null,sc:1,gc:16777215,col:16777215,stars:0},ux=[{},{op:1},{sc:1.3},{sc:1.3,op:1},{col:16719560,op:.8},{col:16726570,op:.8},{col:10473727,op:.8},{gc:9078932},{gc:12171204,op:1},{stars:1,op:.8}];function _s(n,t=512){let e=document.createElement("canvas");e.width=e.height=t,n(e.getContext("2d"),t);let i=new Qn(e);return i.colorSpace=le,i}function Ne(n,t,e,i,s,r,a=16777215,o=!0){let c=new _e({map:t,color:a,transparent:!0,depthWrite:!1,blending:o?jr:Li,side:2});c.userData.o=e,nr.push(c);let h=new Gt(n,c);return h.position.set(i,s,r),ds.add(h),h}var cs=_s((n,t)=>{let e=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.45,"rgba(255,255,255,.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=e,n.fillRect(0,0,t,t)}),Fu=_s((n,t)=>{let e=n.createRadialGradient(t/2,t/2,t*.3,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.42,"rgba(255,255,255,.95)"),e.addColorStop(.6,"rgba(255,255,255,.25)"),e.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=e,n.fillRect(0,0,t,t)}),Ex=_s((n,t)=>{n.translate(t/2,t/2);for(let e=0;e<90;e++){let i=Math.random()*6.283,s=t*(.25+Math.random()*.25),r=1+Math.random()*5,a=n.createLinearGradient(0,0,Math.cos(i)*s,Math.sin(i)*s);a.addColorStop(0,"rgba(255,255,255,.5)"),a.addColorStop(1,"rgba(255,255,255,0)"),n.strokeStyle=a,n.lineWidth=r,n.beginPath(),n.moveTo(0,0),n.lineTo(Math.cos(i)*s,Math.sin(i)*s),n.stroke()}}),dx=_s((n,t)=>{for(let e=0;e<60;e++){let i=t*(.3+.19*e/60);n.strokeStyle=`rgba(255,255,255,${.15+.7*Math.abs(Math.sin(e*1.7))*(1-Math.abs(e-30)/34)})`,n.lineWidth=t*.19/60+.6,n.beginPath(),n.arc(t/2,t/2,i,0,6.3),n.stroke()}}),fx=_s((n,t)=>{let e=n.createLinearGradient(0,0,t,0);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.85,"rgba(255,255,255,.9)"),e.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=e,n.fillRect(0,t*.47,t,t*.06)},256),bu=_s((n,t)=>{let e=n.createLinearGradient(0,0,t,0);e.addColorStop(.05,"#00e050"),e.addColorStop(.5,"#00aaff"),e.addColorStop(.95,"#ff1ec8"),n.fillStyle=e,n.fillRect(0,0,t,t);let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"rgba(0,0,0,1)"),i.addColorStop(.5,"rgba(0,0,0,0)"),i.addColorStop(1,"rgba(0,0,0,1)"),n.fillStyle=i,n.fillRect(0,0,t,t)});function Cu(n){let t=new Float32Array(n*3);for(let s=0;s<n;s++)t[s*3]=(Math.random()-.5)*18,t[s*3+1]=-.3+Math.random()*7,t[s*3+2]=-3.2;let e=new ke;e.setAttribute("position",new We(t,3));let i=new bs({color:16777215,size:.07,transparent:!0,depthWrite:!1});i.userData.o=.9,nr.push(i),ds.add(new ho(e,i))}function _x(){for(;ds.children.length;)ds.children.pop().geometry.dispose();if(nr.forEach(a=>a.dispose()),nr=[],Bs=null,!Vo||$t)return;let n=Math.floor((Vo-1)/10),t=Je.col,e=Te.position.x,i=Te.position.y,s=2.8*Te.scale.x,r=new fi(1,1);if((Je.stars||n===0||n===6)&&Cu(n===0?900:420),n===1&&(Ne(r,Fu,.9,e,i,-3.05,t).scale.setScalar(s*3.3),Ne(r,cs,.35,e,i,-3.1,t).scale.setScalar(s*5)),n===2&&(Bs=Ne(r,Ex,.75,e,i,-3.06,t),Bs.scale.setScalar(s*5.2),Ne(r,cs,.4,e,i,-3.1,t).scale.setScalar(s*3.6)),n===3)for(let a=0;a<9;a++)Ne(r,cs,.16,(Math.random()-.5)*7,.05+Math.random()*.35,-.6-Math.random()*2,t).scale.set(3+Math.random()*3,.5+Math.random()*.5,1);if(n===4){let a=Ne(r,dx,.8,e,i,-3,t,!0);a.scale.setScalar(s*2.9),a.rotation.set(-1.38,0,.3),a.material.depthWrite=!1}if(n===5&&Ne(r,Fu,.6,e,i,-3.05,t).scale.setScalar(s*3.25),n===6){let a=Ne(r,Te.material.map,1,e+s*1.25,i+s*.75,-3.15,16777215,!1);a.scale.setScalar(s*.9),a.material.alphaMap=Te.userData.am,Ne(r,cs,.3,e+s*1.25,i+s*.75,-3.18,t).scale.setScalar(s*1.2)}if(n===7&&(Ne(r,bu,.55,0,1.7,-3.12).scale.set(16,4.5,1),Ne(r,bu,.3,0,.4,-2.2).scale.set(14,1.6,1)),n===8){for(let a=0;a<12;a++){let o=Ne(r,fx,.85,(Math.random()-.5)*10,.8+Math.random()*4,-3.12,a%3?16777215:t);o.scale.set(.8+Math.random()*1.6,.25,1),o.rotation.z=-.5}Cu(300)}n===9&&(Ne(r,cs,.8,0,.02,-2.4,t).scale.set(13,.9,1),Ne(r,cs,.9,0,0,-2.35,16777215).scale.set(9,.22,1))}function tE(n){Vo=n;let t=ux[n?(n-1)%10:0],e=n?Math.floor((n-1)/10):-1;Je.op=t.op==null?null:t.op,Je.sc=(t.sc||1)*(e===5?1.25:1),Je.gc=t.gc||16777215,Je.col=t.col||16777215,Je.stars=t.stars||0,e===5&&Je.op==null&&(Je.op=1),qc=-1}window.__fx=tE;tE(Vo);var bi=new Gt(new Zi(Ds,128,64),new Ve({map:ir,roughness:.9,transparent:!0}));bi.rotation.x=Math.PI/2;bi.position.set(0,-Ds-.14,0);bi.receiveShadow=!0;ue.add(bi);var th=420,mx=new Zi(1,10,7),Fi=new pn(mx,new Ve({color:16777215,roughness:.16}),th);Fi.frustumCulled=!1;ue.add(Fi);var eE=[];for(let n=0;n<th;n++){let t=Math.random()*6.283,e=Math.sqrt(Math.random());eE.push({u:Math.random(),oy:Math.sin(t)*e,oz:Math.cos(t)*e,r:.022+Math.random()*.03}),Fi.setColorAt(n,new vt(723470))}var iE=[];for(let n=0;n<4;n++){let t=new Ce,e=new _e({color:9078934,transparent:!0,opacity:.1,side:2,depthWrite:!1}),i=new Gt(new fi(1.3,1.3),e),s=new co(new po(i.geometry),new Fs({color:9407897,transparent:!0}));t.add(i,s),t.rotation.y=Math.PI/2,t.position.y=.66,ue.add(t),iE.push({g:t,pm:e,em:s.material})}var qo=1400,Qi=new pn(new Zi(1,8,6),new Ve({color:16777215,roughness:.35}),qo);Qi.frustumCulled=!1;ue.add(Qi);var eh=[];for(let n=0;n<qo;n++){let t=Math.random(),e;t<.7?e=[(Math.random()-.5)*.86,Math.random()*1.08,.125]:t<.85?e=[.435,Math.random()*1.08,(Math.random()-.5)*.24]:e=[(Math.random()-.5)*.86,1.085,(Math.random()-.5)*.24];let i=Math.random()*6.283,s=1.2+Math.random()*2.6;eh.push({t:e,s:[e[0]+Math.cos(i)*s,e[1]+(Math.random()-.4)*2.2,e[2]+Math.sin(i)*s*.7+.6],r:.007+Math.random()*.012,c:Math.random()<.5}),Qi.setColorAt(n,new vt(723470))}var bc=new oi(new z(-1,0,0),0),Xt=2,Cc=1,$t=!1,Ti={h:0,a:0,f:0,l:0,z:0},No={h:0,a:0,f:0,l:0,z:0},Ao=0,$c=0,we=new fe,Le=new z,jo=new vt,Ys=new vt(723470),px=new vt(723470),Qx=new vt(2499372),Ls=document.documentElement.style,Ze=(n,t,e)=>Math.round(n+(t-n)*e);function Pn(n,t){Xt=n;let e=je[n];document.documentElement.style.setProperty("--ac",e.css),document.documentElement.style.setProperty("--ac2",e.css2),document.querySelectorAll("[data-p]").forEach(i=>i.classList.toggle("on",+i.dataset.p===n)),document.querySelectorAll("[data-show]").forEach(i=>i.style.display=+i.dataset.show===n?"":"none"),document.querySelectorAll(".pn").forEach(i=>i.textContent=e.k),jo.setHex(e.col);for(let i=0;i<qo;i++)Qi.setColorAt(i,eh[i].c?jo:Ys);if(Qi.instanceColor.needsUpdate=!0,typeof ls<"u"&&or(),t){let i=innerHeight;scrollY<i*1.6&&scrollTo({top:i*2.35,behavior:Ci?"auto":"smooth"})}}function or(){document.querySelectorAll(".chap").forEach(n=>{let t=0;n.querySelectorAll(".ch").forEach(e=>{e.parentElement.style.display!=="none"&&(t=Math.max(t,e.offsetHeight))}),t>0&&(n.style.height=t+($t?30:50)+"px")}),ei=[],document.querySelectorAll(".sec.chap,.sec.s4").forEach(n=>{if(n.style.zoom="",$t)return;let t=n.style.transform;n.style.transform="none";let e=1;for(;e>.7&&n.getBoundingClientRect().bottom>innerHeight-10;)e-=.02,n.style.zoom=e;n.style.transform=t})}function ih(){let n=innerWidth,t=innerHeight;ii.setSize(n,t,!1),Cc=n/t,$t=Cc<1,Ae.aspect=Cc,Ae.fov=$t?34:26,Ae.updateProjectionMatrix(),typeof ls<"u"&&or()}addEventListener("resize",ih);ih();addEventListener("pointermove",n=>{Ao=n.clientX/innerWidth*2-1,$c=n.clientY/innerHeight*2-1});document.querySelectorAll("[data-p]").forEach(n=>n.addEventListener("click",()=>Pn(+n.dataset.p,!0)));var Ko=new So;Xs.addEventListener("click",n=>{if(No.h>.5)return;Ko.setFromCamera(new ut(n.clientX/innerWidth*2-1,-(n.clientY/innerHeight*2-1)),Ae);let t=-1,e=1e9;er.forEach((i,s)=>{let r=Ko.intersectObject(i,!0);r.length&&r[0].distance<e&&(e=r[0].distance,t=s)}),t>=0&&rE(t)});Xs.addEventListener("pointermove",n=>{if(No.h>.5){Xs.style.cursor="",Ro=-1;return}Ko.setFromCamera(new ut(n.clientX/innerWidth*2-1,-(n.clientY/innerHeight*2-1)),Ae),Ro=er.findIndex(t=>Ko.intersectObject(t,!0).length>0),Xs.style.cursor=Ro>=0?"pointer":""});var xx=[...document.querySelectorAll(".ch")].map(n=>({e:n,n:+n.dataset.n,of:+n.dataset.of,p:+n.parentElement.dataset.show})),ls=[...document.querySelectorAll(".sec")],gx=[...document.querySelectorAll(".st")].map(n=>({e:n,t:+n.dataset.t})),Mx=[...document.querySelectorAll(".lk")],yx=document.getElementById("bar"),mi=scrollY/innerHeight,hs=performance.now(),Js=0,Uu=-1,Ho=-1,Vu=document.getElementById("opsL"),nh=[...document.querySelectorAll(".shot")].map(n=>({e:n,p:+n.dataset.op,k:+n.dataset.k,v:n.classList.contains("vids")})),Lc=[...document.querySelectorAll(".opg")].map(n=>({e:n,p:+n.dataset.op,k:+n.dataset.k})),fs=[0,0,0];nh.forEach(n=>{n.k<99&&(fs[n.p]=Math.max(fs[n.p],n.k+1))});nh.forEach(n=>{n.k===99&&(n.k=fs[n.p])});Lc.forEach(n=>{n.k===99&&(n.k=fs[n.p])});for(let n=0;n<3;n++)fs[n]++;var Nu=[...document.querySelectorAll(".lpg")].map(n=>({e:n,k:+n.dataset.k})),ju=-1,Ku=-9,Hu=-1,sr=document.getElementById("homeB");sr&&sr.addEventListener("click",()=>{scrollTo(0,0),mi=0});var Uc=sr||document.querySelector(".pick"),Ox=document.getElementById("scrollH"),qu=-1,$u=-1,nn=!1,li=!1,ei=[],zo=0,On=-1;function Jc(n){let t=innerHeight,e=Math.min(.05,((n||performance.now())-hs)/1e3);hs=n||performance.now();let i=scrollY/t;mi+=(i-mi)*(Ci?1:1-Math.exp(-e*11)),Math.abs(i-mi)<4e-4&&(mi=i);let s=mi;if(li){requestAnimationFrame(Jc);return}if(!Ci){let P=performance.now();scrollY!==Nc&&(Nc=scrollY,Vc=P);let T=P-Vc<260||Math.abs(i-mi)>.003;Js=e>.024?Js+1:Math.max(0,Js-1),Js>24&&en>Wu&&(en=Math.max(Wu,en-.35),Js=0);let Z=T?Math.min(DQ,en):en;Z!==Ac&&(Ac=Z,ii.setPixelRatio(Ac),ih())}Ti.h=_i(s),Ti.a=_i((s-1)/2.2),Ti.c=_i((s-3.4)/3.6),Ti.f=_i((s-7.2)/3.2),Ti.l=_i((s-10.6)/1.9),Ti.z=_i((s-12.6)/1.1);for(let P in Ti)No[P]=Ti[P];let{h:r,a,c:o,f:c,l:h,z:l}=No,u=[1-Mt(.25,.7,s),Mt(1.1,1.5,s)*(1-Mt(3.1,3.4,s)),Mt(3.5,3.8,s)*(1-Mt(6.8,7.1,s)),Mt(7.3,7.7,s)*(1-Mt(10.1,10.4,s)),Mt(10.7,11.1,s)*(1-Mt(12.3,12.6,s)),Mt(12.8,13.3,s)];u[2]>.01&&xx.forEach(P=>{if(P.p!==Xt)return;let T=o*P.of-P.n,Z=P.n===P.of-1,H=T<0||!Z&&T>=1?0:(P.n===0?1:Mt(0,.18,T))*(Z?1:1-Mt(.82,1,T));P.e.style.opacity=H,P.e.style.transform=`translateY(${(1-H)*14}px)`}),ls.forEach((P,T)=>{P.style.opacity=u[T],P.style.pointerEvents=u[T]>.5?"auto":"none",P.style.transform=`translateY(${(1-u[T])*24}px)`}),u[1]>.01&&gx.forEach(P=>{let T=Mt(P.t,P.t+.12,Ti.a);P.e.style.opacity=T,P.e.style.transform=`translateX(${(1-T)*-18}px)`});let E=(XQ?Mt(3.25,3.6,s):Mt(7.1,7.5,s))*(1-Mt(10.3,10.65,s))+Mt(12.55,12.95,s);Math.abs(E-Uu)>.002&&(Uu=E,Ls.setProperty("--bg",`rgb(${Ze(255,8,E)},${Ze(255,7,E)},${Ze(255,10,E)})`),Ls.setProperty("--bg2",`rgb(${Ze(241,20,E)},${Ze(240,16,E)},${Ze(244,24,E)})`),Ls.setProperty("--ink",`rgb(${Ze(22,255,E)},${Ze(18,255,E)},${Ze(26,255,E)})`),Ls.setProperty("--line",`rgba(${Ze(22,255,E)},${Ze(18,255,E)},${Ze(26,255,E)},.16)`),Ls.setProperty("--panel",`rgba(${Ze(255,18,E)},${Ze(255,15,E)},${Ze(255,22,E)},.93)`)),rr.material.opacity=.16*(1-E),tr.material.opacity=E,tr.visible=E>.01,tx.intensity=Lt(.6,.32,E),Fo.intensity=E*5,bo.intensity=E*3,Fo.color.set(je[Xt].col),bo.color.set(je[Xt].col),Ys.copy(px).lerp(Qx,E),ii.toneMappingExposure=Lt(.95,.74,E);let _=s>.6?Xt:-1;_!==Ho&&(Ho=_,sh()),yx.style.transform=`scaleX(${_i(s/13.7)})`;{let P=Mt(1.6,2.1,s)*(1-Mt(2.6,3.1,s));Math.abs(P-qu)>.01&&(qu=P,Ox.style.opacity=P)}{let P=1-u[0];Math.abs(P-$u)>.004&&($u=P,Uc.style.opacity=P,Uc.style.pointerEvents=P>.5?"auto":"none",Uc.style.visibility=P<.01?"hidden":"visible")}let m=Mt(.15,1,r),p=Lt(7.4,6.3,m),f=Lt(.5,.62,m);if($t){let P=innerHeight,T=innerWidth;(++zo>24||!ei.length)&&(zo=0,ei=ls.map(dt=>dt.offsetTop),On<0&&(On=ei[1]||P*.4));let Z=0,H=0;for(let dt=1;dt<6;dt++)Z+=u[dt],H+=u[dt]*ei[dt];Z>.01&&(On+=(H/Z-On)*(Ci?1:.14));let st=Lt(72,96,m),g=.95*T/2.52,Q=ei[0]-20,A=Math.max(60,Math.min((On-24-st)/1.2,.92*T/1.62)),D=On-24,Y=Lt(g,A,m),L=Lt(Q,D,m);p=P/2/(Y*Math.tan(17*Math.PI/180)),f=-.14+(L-P/2)/Y}else{let P=innerHeight,T=innerWidth;(++zo>24||!ei.length)&&(zo=0,ei=ls.map(Q=>Q.offsetTop));let Z=ei[0]-P*.03,H=Math.max(40,Math.min(.84*T/4.9,(Z-64-P*.2)/1.3)),st=P/2/(H*Math.tan(13*Math.PI/180)),g=-.14+(Z-P/2)/H;p=Lt(st,6.3,m),f=Lt(g,.62,m)}Ae.position.set(Ao*.25,f+($t?p*.09:.35)-$c*.12,p),Ae.lookAt(0,f,0);let d=$t?0:1,O=Mt(.15,1,r),x=Math.min(1,Mt(.72,1,a)*(1-Mt(.02,.1,o))+Mt(.54,.64,o)*(1-Mt(.8,.9,o))+Mt(.02,.14,c)*(1-Mt(.92,1,c))+Mt(0,.25,h)*(1-Mt(0,.35,l))),v=Mt(.2,1,r)*.62*(1-Mt(.08,.62,a))+.5*Mt(.16,.28,o)*(1-Mt(.4,.5,o)),R=Lt(Lt(Lt(d*1.05,d*1.42,Mt(0,.3,c)),d*1.65,Mt(0,.3,h)),d*1,Mt(0,.4,l))+($t?.2*Mt(0,.3,h)*(1-Mt(0,.4,l))+.3*Mt(.05,.3,c)*(1-Mt(.85,1,c)):0),w=$t?0:.2*Mt(.1,.42,c)*(1-Mt(.76,.97,c));w>0&&(Ae.position.lerp(Le.set(-3.9,.95,1.25),w),Le.set(Lt(0,R,w),Lt(f,.66,w),0),Ae.lookAt(Le)),w>.001?(Ae.setViewOffset(innerWidth,innerHeight,-innerWidth*.17*w,0,innerWidth,innerHeight),Tc=1):Tc&&(Ae.clearViewOffset(),Tc=0);let I=$t?.84:1.85,$=$t?.86:1.12;if(ox.forEach((P,T)=>{let Z=rx[T]*($t?.7:1),H=I*.97;P.userData.b.scale.set(H,Z,1),P.userData.b.position.y=Z/2-.14,P.userData.e.scale.x=H,P.userData.e.position.set(0,Z-.13,.55),P.position.set((T-1)*I,-O*1.6,0),P.visible=!1,Fc[T]+=((Ro===T&&r<.3?.09:0)-Fc[T])*.15}),er.forEach((P,T)=>{let Z=T===Xt,H=(T-1)*I,st=-.32-(Math.atan(H/p)+Math.atan(I/p)),g,Q,A;Z?(g=Lt(H,R,O),Q=Lt($,$t?.95:1.12,O),A=Lt(st,-.5+a*.18-l*.1,O)+Math.sin(o*6.283)*.2+Mt(.84,.99,o)*6.2832+Ao*.06):(g=H+(T<Xt?-1:1)*O*7,(T<Xt&&H>0||T>Xt&&H<0)&&(g=H+(T<Xt?-1:1)*O*7),Q=$,A=st);let D=0;P.position.set(g,(Z?D*(1-O):D-O*1.6)+(Fc[T]-H*H/(2*Ds))*(1-O),0),P.rotation.y=A,P.rotation.z=Z?-H/Ds*(1-O):-H/Ds,P.scale.setScalar(Q),P.visible=Z||O<.98,P.userData.set(Z?v:0,Z?x:0);let Y=Z&&l>.02&&l<.985;P.userData.mats.forEach(L=>{L.clippingPlanes=Y?[bc]:null})}),O<.99){let P=hs/1e3;for(let T=0;T<Dc;T++){let Z=Bu[T],H=(Z.y0+P*Z.v)%2.8/2.8;we.position.set((Z.k-1)*I+Z.x*(1.1-H*.55)*($t?.6:1),-.1+H*($t?3.6:2.8),Z.z),we.scale.setScalar(Z.r*($t?.7:1)*Math.min(1,H*8)*Math.min(1,(1-H)*5)*(1.25-H*.6)*(1-O)),we.updateMatrix(),Es.setMatrixAt(T,we.matrix)}Es.instanceMatrix.needsUpdate=!0}Es.visible=O<.99,cx.forEach((P,T)=>{P.g.visible=!1,P.g.position.x=(T-1)*I,P.g.scale.setScalar($),P.d.material.opacity=1-O,P.t.material.opacity=1-O});{let P=1-Mt(.1,.8,O);Uo.visible=Te.visible=bi.visible=O<.99;let T=$t?lx:0,Z=hx[T];T!==qc&&(qc=T,Te.scale.setScalar(Z[0]*($t?1:Je.sc)),Te.position.set(Z[1],Z[2],-3),Te.material.alphaMap=T?Te.userData.am:null,Te.material.needsUpdate=!0,bi.material.map=Z[4]?null:ir,bi.material.color.set(Z[4]?1512987:Je.gc),bi.material.needsUpdate=!0,_x()),Uo.material.opacity=P,Te.material.opacity=(Je.op==null||$t?Z[3]:Je.op)*P,bi.material.opacity=P,ds.visible=O<.99;for(let H of nr)H.opacity=H.userData.o*P;Bs&&(Bs.rotation.z=hs/1e3*.03)}let y=er[Xt];y.updateMatrixWorld(!0);{let P=u[3]>.01;if(P!==(Vu.style.visibility==="visible")&&(Vu.style.visibility=P?"visible":"hidden"),P){let T=fs[Xt]||1,Z=.8/T,H=c<.2?-1:Math.min(T-1,Math.floor((c-.2)/Z));(H!==Ku||Xt!==Hu)&&(Ku=H,Hu=Xt,Lc.forEach(lt=>{lt.e.style.display=lt.p===Xt&&lt.k===H?"block":"none"}),ei=[]);let st=H<0?c/.2:(c-.2-H*Z)/Z,g=(H<0?1:Mt(0,.1,st))*(H===T-1?1:1-Mt(.92,1,st));Lc.forEach(lt=>{lt.p===Xt&&lt.k===H&&(lt.e.style.opacity=g)});let Q=innerWidth,A=innerHeight;Ae.updateMatrixWorld(),Le.set(R,.5,0).project(Ae);let D=(Le.x*.5+.5)*Q,Y=(-Le.y*.5+.5)*A,L,dt,ht,Qt;if($t){let Pt=On-12;dt=Math.max(90,Pt-96),L=Q*.92,ht=Q/2,Qt=(96+Pt)/2}else{let lt=ls[3],Pt=lt.offsetLeft+lt.offsetWidth+26;Le.set(R-.62,.5,0).project(Ae);let tt=(Le.x*.5+.5)*Q-10,jt=Math.max(180,tt-Pt);L=Math.min(jt,A*.6*1.25,Q*.34),dt=L/1.25,ht=(Pt+tt)/2,Qt=A*.55}nh.forEach(lt=>{if(lt.p!==Xt){lt.e.style.opacity!=="0"&&(lt.e.style.opacity="0");return}let Pt=(c-.2-lt.k*Z)/Z;if(Pt<-.02||Pt>1.05){lt.e.style.opacity="0";return}let tt=Mt(0,.26,Pt),jt=tt*tt*(3-2*tt),bt=lt.k===T-1?0:Mt(.86,1,Pt),At=Lt(D,ht,jt)-bt*Q*.1,kt=Lt(Y,Qt,jt)-bt*30,gt=Lt(.12,1,jt)*(1-bt*.12),Tt=lt.v?Math.min(dt,L*.47*16/9):dt;(lt.w!==L||lt.h!==Tt)&&(lt.w=L,lt.h=Tt,lt.e.style.width=L+"px",lt.e.style.height=Tt+"px");let Jt=Mt(0,.12,Pt)*(1-bt)*u[3];lt.e.style.opacity=Jt,lt.e.style.pointerEvents=Jt>.6?"auto":"none",lt.e.style.transform=`translate(${At-L/2}px,${kt-Tt/2}px) scale(${gt}) rotate(${(1-jt)*-16}deg)`})}}{let P=h<.6?0:1;P!==ju&&(ju=P,Nu.forEach(Z=>Z.e.style.display=Z.k===P?"block":"none"),ei=[]);let T=P===0?1-Mt(.52,.6,h):Mt(.6,.68,h);Nu.forEach(Z=>{Z.k===P&&(Z.e.style.opacity=T)})}let S=Mt(.02,.1,o)*(1-Mt(0,.12,c));if(pi.visible=S>.01,pi.visible&&(pi.position.set(R,-.125,0),pi.scale.setScalar(($t?.72:.98)*S),Math.abs(o-Tu)>.004&&(Tu=o,Wo.geometry.dispose(),Wo.geometry=new Ai(.8,.012,8,64,Math.max(.01,o*6.283))),Wo.material.color.set(je[Xt].col),Kc.material.color.set(je[Xt].col),Kc.position.set(Math.cos(o*6.283)*.8,Math.sin(o*6.283)*.8,0)),tn.visible=pi.visible,tn.visible){let P=hs/1e3,T=$t?.72:.98,Z=P*.22%1;if(Zo.scale.setScalar(1+Z*.43),Zo.material.opacity=(1-Z)*.55,Zo.material.color.set(je[Xt].col),Au!==Xt){Au=Xt;let H=new vt(je[Xt].col),st=new vt(723470);for(let g=0;g<Co;g++)tn.setColorAt(g,Hc[g].d?st:H);tn.instanceColor.needsUpdate=!0}for(let H=0;H<Co;H++){let st=Hc[H],g=(st.y0+P*st.v)%1,Q=st.a+g*1.1,A=st.R*T*(1-g*.22);we.position.set(R+Math.cos(Q)*A,-.12+g*g*1.9+g*.25,-Math.sin(Q)*A),we.scale.setScalar(st.r*Math.min(1,g*9)*Math.pow(1-g,.8)*S),we.updateMatrix(),tn.setMatrixAt(H,we.matrix)}tn.instanceMatrix.needsUpdate=!0}let C=0,it=0,rt=1,W=$t?-1.5:-1.9,b=R+.05,K=hs/1e3,X=$t?.75:.66,J=$t?.8:1.1;if(iE.forEach((P,T)=>{let Z=(T+1)/5;P.g.position.x=R-($t?1.25:1.75)+(T-1)*($t?.27:.38);let H=$t?.62:1;P.g.scale.set(.5*H,.76*H,1),P.g.rotation.y=Math.PI/2-.3,P.g.position.y=X,P.g.position.z=.3;let st=T===3;P.pm.opacity=(st?.13:.08)*C,P.em.opacity=C,P.pm.color.set(st?je[Xt].col:10131622),P.em.color.set(st?je[Xt].col:11118516),P.g.visible=C>.01&&T>0}),Fi.visible=it>.01,it>.01)for(let P=0;P<th;P++){let T=eE[P],Z=_i(c*1.75-T.u*.75),H=P%3,st=T.u*44+o*5+K*.12,g=(.8+.2*H)*J,Q=g*Math.sin(st),A=R+g*Math.cos(st),D=X+Q*[-.4,.12,.5][H]+T.oy*.06,Y=Math.pow(1-Z,1.1)*($t?.3:.5)+.04,L=Math.atan2(T.oy,T.oz)+(1-Z)*3.5+K*.25,dt=Math.hypot(T.oy,T.oz)*Y;we.position.set(Lt(A,Lt(W-.25,b,Z),rt),Lt(D,X+Math.sin(L)*dt,rt),Lt(Q,.3+Math.cos(L)*dt*.7,rt)),we.scale.setScalar(Z>=.995?0:T.r*it*(.5-Z*.2)),we.updateMatrix(),Fi.setMatrixAt(P,we.matrix),Fi.setColorAt(P,rt<.5?P%2?jo:Ys:Z>.74?jo:Ys)}Fi.instanceMatrix.needsUpdate=!0,Fi.instanceColor.needsUpdate=!0,Fi.visible=it>.01;let q=y.userData.tray,B=Mt(.1,.55,h)*(1-Mt(0,.3,l)),nt=Mt(.5,.95,h)*(1-Mt(0,.25,l)),ft=$t?1.2:2.2,j=$t?-.52:d*.2;Du.forEach((P,T)=>{if(T===Xt){Le.set(.3,.58,.108),q.localToWorld(Le);let Z=j,H=$t?.42:.72;P.position.set(Lt(Le.x,Z,B),Lt(Le.y,H,B),Lt(Le.z,ft,B)),P.rotation.set(-$c*.25*B,Lt(y.rotation.y,Ao*.45-.08,B),0),P.scale.setScalar(y.scale.x*Lt(1,$t?1.25:1.7,B)),P.visible=x>.05||B>.01}else P.visible=!1});let et=Mt(0,.06,c)*(1-Mt(.94,1,c)),Et=et>.01&&l<=0,Ot=Et?c*.9:l,pt=Et?et:Mt(0,.08,l),wt=y.position.x,Rt=y.scale.x,yt=y.rotation.y,Wt=Math.cos(yt),k=Math.sin(yt),ot=Lt(-.75,.75,Mt(.25,.98,l));if(bc.constant=wt+ot*Rt,pt>.01&&l<.995)for(let P=0;P<qo;P++){let T=eh[P],Z=_i(Ot*2.1-(T.t[0]+.45)*.9-.05),H=Z*Z*(3-2*Z),st=Lt(T.s[0],T.t[0],H),g=Lt(T.s[1],T.t[1],H),Q=Lt(T.s[2],T.t[2],H),A=wt+(st*Wt+Q*k)*Rt,D=(-st*k+Q*Wt)*Rt,Y=(Et||A<bc.constant-.02)&&H>.97;we.position.set(A,g*Rt,D),we.scale.setScalar(Y||pt<.01?0:T.r*pt*(1.5-H*.6)*(Et?1-Mt(.6,.97,H):1)),we.updateMatrix(),Qi.setMatrixAt(P,we.matrix),T.c||Qi.setColorAt(P,Ys)}Qi.instanceColor.needsUpdate=!0,Qi.instanceMatrix.needsUpdate=!0,Qi.visible=pt>.01&&l<.995,ii.render(ue,Ae),requestAnimationFrame(Jc)}document.querySelectorAll("[data-go]").forEach(n=>n.addEventListener("click",t=>{t.preventDefault(),scrollTo({top:+n.dataset.go*innerHeight,behavior:"smooth"}),document.body.classList.remove("mopen")}));var Lu=document.getElementById("burger");Lu&&Lu.addEventListener("click",()=>document.body.classList.toggle("mopen"));var nE=["v_core.mp4","v_plus.mp4","v_prime.mp4"],vn=document.getElementById("intro"),Sn=document.getElementById("introV"),Ju=document.getElementById("introBar"),sE=0;function Sx(){nn&&(nn=!1,li=!1,clearTimeout(sE),vn.style.transitionDuration=".26s",vn.classList.remove("in"),setTimeout(()=>{vn.classList.remove("on");try{Sn.pause()}catch{}},300))}function rE(n){if(nn)return;if(Ci&&xi.get("intro")!=="1"||!vn||matchMedia("(prefers-reduced-motion: reduce)").matches){Pn(n,!0);return}nn=!0,Pn(n,!1),Ju.style.width="0",Sn.src=nE[n],vn.style.transitionDuration="",vn.classList.add("on"),requestAnimationFrame(()=>vn.classList.add("in"));let t=!1,e=!1,i=()=>{let o=innerHeight*2.35;scrollY<innerHeight*1.6&&(scrollTo(0,o),mi=o/innerHeight),Nc=scrollY,Vc=0};setTimeout(()=>{nn&&!e&&(i(),li=!0)},650);let s=()=>{!nn||e||(e=!0,i(),Sx())},r=()=>{if(!nn||e)return;let o=Sn.duration,c=Sn.currentTime;if(o&&(Ju.style.width=c/o*100+"%",!t&&o-c<.9&&(t=!0,i(),li=!1),o-c<.22)){s();return}requestAnimationFrame(r)};requestAnimationFrame(r),Sn.onended=s,Sn.onerror=s,sE=setTimeout(s,12e3);let a=Sn.play();a&&a.catch&&a.catch(s),document.getElementById("introSkip").onclick=s}window.__intro=rE;window.__IV=nE;addEventListener("keydown",n=>{n.key==="Escape"&&nn&&document.getElementById("introSkip").click()});var Fe="";function sh(){Mx.forEach(n=>{let t=n.dataset.pg?n.dataset.pg===Fe:!Fe&&Ho>=0&&+n.dataset.rb===Ho;n.classList.toggle("on",t)})}function wn(){if(!Fe)return;let n=document.getElementById("pg-"+Fe);Fe="",li=!1,n&&(n.classList.remove("in"),setTimeout(()=>{(!Fe||n.id!=="pg-"+Fe)&&n.classList.remove("on")},300));try{location.hash&&history.replaceState(null,"",location.pathname+location.search)}catch{}sh()}function rh(n){let t=document.getElementById("pg-"+n);if(t){if(Fe&&Fe!==n){let e=document.getElementById("pg-"+Fe);e&&e.classList.remove("in","on")}Fe=n,document.body.classList.remove("mopen"),t.classList.add("on"),t.scrollTop=0,requestAnimationFrame(()=>t.classList.add("in")),setTimeout(()=>{Fe===n&&(li=!0)},320);try{location.hash=n}catch{}sh()}}function vx(n){wn(),document.body.classList.remove("mopen"),Pn(n,!1);let t=innerHeight*2.35;scrollTo(0,t),mi=t/innerHeight}document.querySelectorAll("[data-pg]").forEach(n=>n.addEventListener("click",t=>{t.preventDefault(),rh(n.dataset.pg)}));document.querySelectorAll("[data-rb]").forEach(n=>n.addEventListener("click",t=>{t.preventDefault(),vx(+n.dataset.rb)}));document.querySelectorAll("[data-close]").forEach(n=>n.addEventListener("click",wn));{let n=document.getElementById("risk");if(n){let t=Ci&&xi.get("risk")!=="1";try{t=t||localStorage.getItem("atfc_risk")==="1"}catch{}t&&n.classList.add("off"),document.getElementById("riskOk").addEventListener("click",()=>{n.classList.add("off");try{localStorage.setItem("atfc_risk","1")}catch{}})}}{let n=document.querySelector(".top .logo");n&&n.addEventListener("click",t=>{t.preventDefault(),t.stopImmediatePropagation(),wn(),document.body.classList.remove("mopen"),scrollTo(0,0),mi=0},!0)}document.querySelectorAll("[data-go]").forEach(n=>n.addEventListener("click",wn));sr&&sr.addEventListener("click",wn);addEventListener("hashchange",()=>{let n=location.hash.replace("#","");n&&document.getElementById("pg-"+n)?Fe!==n&&rh(n):Fe&&wn()});addEventListener("keydown",n=>{n.key==="Escape"&&Fe&&wn()});{let n=location.hash.replace("#","");n&&document.getElementById("pg-"+n)&&setTimeout(()=>rh(n),50)}window.__booting&&(li=!0,window.__bootRelease=()=>{li=!1});Pn(2,!1);or();function Yu(n){Xu.forEach((t,e)=>{let i=n?n[e]:t.h;i!=null&&(t.e?t.e.innerHTML!==i&&(t.e.innerHTML=i):t.n.nodeValue=i)}),Pn(Xt,!1),or(),ei=[]}var oE=()=>document.querySelectorAll("[data-sl]").forEach(n=>n.classList.toggle("on",n.dataset.sl===Go));document.querySelectorAll("[data-sl]").forEach(n=>n.onclick=()=>{let t=n.dataset.sl;try{localStorage.setItem("atfc_lang",t),sessionStorage.setItem("atfc_in",t)}catch{}let e=li;li=!0;let i=()=>{li=e};window.__setLang(t).then(i,i)});window.__setLang=n=>(/^(it|en|es|de)$/.test(n)||(n="it"),n===Go?Promise.resolve():(Go=n,document.documentElement.lang=n,oE(),document.querySelectorAll("a[data-sk]").forEach(t=>t.setAttribute("href",(n==="it"?"":n+"/")+t.dataset.sk+".html")),n==="it"?(Yu(null),Promise.resolve()):fetch("i18n/"+n+".json").then(t=>t.json()).then(t=>{Go===n&&Yu(t)}).catch(()=>{})));oE();{let n=xi.get("lang")||window.__lang;if(n&&(window.__setLang(n),xi.get("lang")))try{sessionStorage.setItem("atfc_in",n)}catch{}}document.fonts&&document.fonts.ready&&document.fonts.ready.then(or);requestAnimationFrame(Jc);window.__sel=n=>Pn(n,!1);window.READY=!0;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
