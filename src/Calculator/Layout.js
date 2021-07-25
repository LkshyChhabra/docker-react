import LayoutC from './Layout.css';
import React,{Component} from 'react';
import Table from './Table'

class Layout extends Component{
    state={
        txt:"",
        ans:"",
        from:"",
        to:"",
        gms:["pink"],
        mgs:["pink"],
        kgs:["pink"],
        secs:["pink"],
        hrs:["pink"],
        mins:["pink"],
        foots:["pink"],
        inchs:["pink"],
        mms:["pink"],
        cms:["pink"],
        kms:["pink"],
        meters:["pink"]
    };
   

 
    conversions=(props)=>{
       
        if(this.state.from===""){
            if(this.state.txt!==""){
            this.setState({from:props,txt:this.state.txt+props});   
            setTimeout(() => {
                console.log(this.state.from);
                if(this.state.from==="kg"){
                    this.setState({gms:["isconvirtable"],mgs:["isconvirtable"]})
                }else if(this.state.from==="gm"){
                    this.setState({kgs:["isconvirtable"],mgs:["isconvirtable"]})
                
                }else if(this.state.from==="mg"){
                    this.setState({kgs:["isconvirtable"],gms:["isconvirtable"]})
                }else if(this.state.from==="km"){
                    this.setState({meters:["isconvirtable"],
                    cms:["isconvirtable"],
                    mms:["isconvirtable"],
                    foots:["isconvirtable"],
                    inchs:["isconvirtable"]})
                }else if(this.state.from==="m"){
                    this.setState({kms:["isconvirtable"],
                    cms:["isconvirtable"],
                    mms:["isconvirtable"],
                    foots:["isconvirtable"],
                    inchs:["isconvirtable"]})
                }else if(this.state.from==="cm"){
                    this.setState({meters:["isconvirtable"],
                    kms:["isconvirtable"],
                    mms:["isconvirtable"],
                    inchs:["isconvirtable"],
                    foots:["isconvirtable"]})
                }else if(this.state.from==="foot"){
                    this.setState({kms:["isconvirtable"],
                    cms:["isconvirtable"],
                    mms:["isconvirtable"],
                    inchs:["isconvirtable"],meters:["isconvirtable"]})
                }else if(this.state.from==="inch"){
                    this.setState({kms:["isconvirtable"],
                    meters:["isconvirtable"],
                    cms:["isconvirtable"],
                    mms:["isconvirtable"],
                    foots:["isconvirtable"],
                   })
                }else if(this.state.from==="mm"){
                    this.setState({kms:["isconvirtable"],
                    meters:["isconvirtable"],
                    cms:["isconvirtable"],
                    foots:["isconvirtable"],
                    inchs:["isconvirtable"]})
                }else if(this.state.from==="hrs"){
                    this.setState({mins:["isconvirtable"],secs:["isconvirtable"]})
                }else if(this.state.from==="mins"){
                    this.setState({hrs:["isconvirtable"],secs:["isconvirtable"]})
                }else if(this.state.from==="secs"){
                    this.setState({hrs:["isconvirtable"],mins:["isconvirtable"]})
                }
            }, 300);}
        }else{
            console.log("from: "+this.state.from);
            this.setState({to:props});
            setTimeout(() => {
                console.log("to: "+this.state.to);
                if(this.state.from==="kg"){
                    switch(this.state.to){
                        case "gm":
                            let y=(this.state.txt).substr(0,this.state.txt.length-2);
                    
                            let x=String(eval("y*1000"));
                    
                            this.setState({txt:"",ans:(x+"gm"),from:"",to:""});
                            break;
    
                        case "mg":
                            let z=(this.state.txt).substr(0,this.state.txt.length-2);
                    
                            let q=String(eval("z*10000"));
                            
                            this.setState({txt:"",ans:q+"mg",from:"",to:""});
                            break;
                        default:   
                            this.setState({txt:"",ans:"invalid conversion",from:"",to:""});
                    }
                
                }else if(this.state.from==="gm"){
                    switch(this.state.to){
                        case "kg":
                            let a=(this.state.txt).substr(0,this.state.txt.length-2);
                    
                            let b=String(eval("a/1000"));
                    
                            this.setState({txt:"",ans:b+"kg",from:"",to:""});
                            break;

                        case "mg":
                            let c=(this.state.txt).substr(0,this.state.txt.length-2);
                    
                            let d=String(eval("c*1000"));
                            
                            this.setState({txt:"",ans:d+"mg",from:"",to:""});
                            break;
                        default:   
                            this.setState({txt:"",ans:"invalid conversion",from:"",to:""});
                    }
            
                }else if(this.state.from==="mg"){
            switch(this.state.to){
                case "kg":
                    let e=(this.state.txt).substr(0,this.state.txt.length-2);
            
                    let f=String(eval("e/1000000"));
            
                    this.setState({txt:"",ans:f+"kg",from:"",to:""});
                    break;

                case "gm":
                    let g=(this.state.txt).substr(0,this.state.txt.length-2);
            
                    let h=String(eval("g/1000"));
                    
                    this.setState({txt:"",ans:h+"gm",from:"",to:""});
                    break;
                default:   
                    this.setState({txt:"",ans:"invalid conversion",from:"",to:""});
            }
    
                }else if(this.state.from==="m"){
                    switch(this.state.to){
                        case "km":
                            // console.log("inside m case");
                            let mekm=(this.state.txt).substr(0,this.state.txt.length-1);
                    
                            let MEKM=String(eval("mekm*0.001"));
                    
                            this.setState({txt:"",ans:MEKM+"km",from:"",to:""});
                            break;
    
                        case "cm":
                            console.log("inside cm case");
                            let mecm=(this.state.txt).substr(0,this.state.txt.length-1);
                            let MECM=String(eval("mecm*100"));
                            this.setState({txt:"",ans:MECM+"cm",from:"",to:""});
                            break;

                        case "mm":
                            console.log("inside mm case");
                            let memm=(this.state.txt).substr(0,this.state.txt.length-1);
                    
                            let MEMM=String(eval("memm*1000"));
                            
                            this.setState({txt:"",ans:MEMM+"mm",from:"",to:""});
                            break;

                        case "inch":
                            console.log("inside inch case");
                            let mein=(this.state.txt).substr(0,this.state.txt.length-1);
                    
                            let MEIN=String(eval("mein*39.370"));
                            
                            this.setState({txt:"",ans:MEIN+"inch",from:"",to:""});
                            break;

                        case "foot":
                            console.log("inside foot case");
                            let mefo=(this.state.txt).substr(0,this.state.txt.length-1);
                    
                            let MEFO=String(eval("mefo*3.280"));
                            
                            this.setState({txt:"",ans:MEFO+"foot",from:"",to:""});
                            break;

                        default:   
                        console.log("inside default case");
                        this.setState({txt:"",ans:"invalid conversion",from:"",to:""});
                    }
            
                }else if(this.state.from==="km"){
                    switch(this.state.to){
                        case "m":
                            console.log("inside m case");
                            let m=(this.state.txt).substr(0,this.state.txt.length-2);
                    
                            let n=String(eval("m*1000"));
                    
                            this.setState({txt:"",ans:n+"m",from:"",to:""});
                            break;
    
                        case "cm":
                            console.log("inside cm case");
                            let ui=(this.state.txt).substr(0,this.state.txt.length-2);
                            let pl=String(eval("ui*100000"));
                            this.setState({txt:"",ans:pl+"cm",from:"",to:""});
                            break;

                        case "mm":
                            console.log("inside mm case");
                            let o=(this.state.txt).substr(0,this.state.txt.length-2);
                    
                            let p=String(eval("o*1000000"));
                            
                            this.setState({txt:"",ans:p+"mm",from:"",to:""});
                            break;

                        case "inch":
                            console.log("inside inch case");
                            let q=(this.state.txt).substr(0,this.state.txt.length-2);
                    
                            let r=String(eval("q*39370"));
                            
                            this.setState({txt:"",ans:r+"inch",from:"",to:""});
                            break;

                        case "foot":
                            console.log("inside foot case");
                            let rqw=(this.state.txt).substr(0,this.state.txt.length-2);
                    
                            let sre=String(eval("rqw*3280"));
                            
                            this.setState({txt:"",ans:sre+"foot",from:"",to:""});
                            break;

                        default:   
                        console.log("inside default case");
                        this.setState({txt:"",ans:"invalid conversion",from:"",to:""});
                    }
            
                }else if(this.state.from==="cm"){
                    switch(this.state.to){
                        case "m":
                            console.log("inside m case");
                            let cmme=(this.state.txt).substr(0,this.state.txt.length-2);
                    
                            let CMME=String(eval("cmme*0.01"));
                    
                            this.setState({txt:"",ans:CMME+"m",from:"",to:""});
                            break;
    
                        case "km":
                            console.log("inside cm case");
                            let cmkm=(this.state.txt).substr(0,this.state.txt.length-2);
                            let CMKM=String(eval("cmkm*0.00001"));
                            this.setState({txt:"",ans:CMKM+"km",from:"",to:""});
                            break;

                        case "mm":
                            console.log("inside mm case");
                            let cmmm=(this.state.txt).substr(0,this.state.txt.length-2);
                    
                            let CMMM=String(eval("cmmm*10"));
                            
                            this.setState({txt:"",ans:CMMM+"mm",from:"",to:""});
                            break;

                        case "inch":
                            console.log("inside inch case");
                            let cmin=(this.state.txt).substr(0,this.state.txt.length-2);
                    
                            let CMIN=String(Math.round(eval("cmin*0.393")));
                            
                            this.setState({txt:"",ans:CMIN+"inch",from:"",to:""});
                            break;

                        case "foot":
                            console.log("inside foot case");
                            let cmfo=(this.state.txt).substr(0,this.state.txt.length-2);
                    
                            let CMFO=String(Math.round(eval("cmfo*0.03280")));
                            
                            this.setState({txt:"",ans:CMFO+"foot",from:"",to:""});
                            break;

                        default:   
                        console.log("inside default case");
                        this.setState({txt:"",ans:"invalid conversion",from:"",to:""});
                    }
            
                }else if(this.state.from==="foot"){
                    switch(this.state.to){
                        case "m":
                            console.log("inside m case");
                            let fome=(this.state.txt).substr(0,this.state.txt.length-4);
                    
                            let FOME=String(Math.round(eval("fome*0.3048")));
                    
                            this.setState({txt:"",ans:FOME+"m",from:"",to:""});
                            break;
    
                        case "cm":
                            console.log("inside cm case");
                            let focm=(this.state.txt).substr(0,this.state.txt.length-4);
                            let FOCM=String(Math.round(eval("focm*30.48")));
                            this.setState({txt:"",ans:FOCM+"cm",from:"",to:""});
                            break;

                        case "mm":
                            console.log("inside mm case");
                            let fomm=(this.state.txt).substr(0,this.state.txt.length-4);
                    
                            let FOMM=String(Math.round(eval("fomm*304.8")));
                            
                            this.setState({txt:"",ans:FOMM+"mm",from:"",to:""});
                            break;

                        case "inch":
                            console.log("inside inch case");
                            let foin=(this.state.txt).substr(0,this.state.txt.length-4);
                    
                            let FOIN=String(eval("foin*12"));
                            
                            this.setState({txt:"",ans:FOIN+"inch",from:"",to:""});
                            break;

                        case "km":
                            console.log("inside foot case");
                            let fokm=(this.state.txt).substr(0,this.state.txt.length-4);
                    
                            let FOKM=String(Math.round(eval("fokm*0.0003048")));
                            
                            this.setState({txt:"",ans:FOKM+"km",from:"",to:""});
                            break;

                        default:   
                        console.log("inside default case");
                        this.setState({txt:"",ans:"invalid conversion",from:"",to:""});
                    }
            
                }else if(this.state.from==="inch"){
                    switch(this.state.to){
                        case "m":
                            console.log("inside m case");
                            let inme=(this.state.txt).substr(0,this.state.txt.length-4);
                    
                            let INME=String(Math.round(eval("inme*0.0254")));
                    
                            this.setState({txt:"",ans:INME+"m",from:"",to:""});
                            break;
    
                        case "cm":
                            console.log("inside cm case");
                            let incm=(this.state.txt).substr(0,this.state.txt.length-4);
                            let INCM=String(Math.round(eval("incm*2.54")));
                            this.setState({txt:"",ans:INCM+"cm",from:"",to:""});
                            break;

                        case "mm":
                            console.log("inside mm case");
                            let inmm=(this.state.txt).substr(0,this.state.txt.length-4);
                    
                            let INMM=String(Math.round(eval("inmm*24.5")));
                            
                            this.setState({txt:"",ans:INMM+"mm",from:"",to:""});
                            break;

                        case "km":
                            console.log("inside inch case");
                            let inkm=(this.state.txt).substr(0,this.state.txt.length-4);
                    
                            let INKM=String(Math.round(eval("inkm*0.0000254")));
                            
                            this.setState({txt:"",ans:INKM+"km",from:"",to:""});
                            break;

                        case "foot":
                            console.log("inside foot case");
                            let info=(this.state.txt).substr(0,this.state.txt.length-4);
                    
                            let INFO=String(Math.round(eval("info*0.083")));
                            
                            this.setState({txt:"",ans:INFO+"foot",from:"",to:""});
                            break;

                        default:   
                        console.log("inside default case");
                        this.setState({txt:"",ans:"invalid conversion",from:"",to:""});
                    }
            
                }else if(this.state.from==="mm"){
                    switch(this.state.to){
                        case "m":
                            console.log("inside m case");
                            let mmme=(this.state.txt).substr(0,this.state.txt.length-2);
                    
                            let MMME=String(eval("mmme*0.001"));
                    
                            this.setState({txt:"",ans:MMME+"m",from:"",to:""});
                            break;
    
                        case "cm":
                            console.log("inside cm case");
                            let mmcm=(this.state.txt).substr(0,this.state.txt.length-2);
                            let MMCM=String(eval("mmcm*0.1"));
                            this.setState({txt:"",ans:MMCM+"cm",from:"",to:""});
                            break;

                        case "km":
                            console.log("inside mm case");
                            let mmkm=(this.state.txt).substr(0,this.state.txt.length-2);
                    
                            let MMKM=String(eval("mmkm*0.000001"));
                            
                            this.setState({txt:"",ans:MMKM+"mm",from:"",to:""});
                            break;

                        case "inch":
                            console.log("inside inch case");
                            let mmin=(this.state.txt).substr(0,this.state.txt.length-2);
                    
                            let MMIN=String(Math.round(eval("mmin*0.034")));
                            
                            this.setState({txt:"",ans:MMIN+"inch",from:"",to:""});
                            break;

                        case "foot":
                            console.log("inside foot case");
                            let mmfo=(this.state.txt).substr(0,this.state.txt.length-2);
                    
                            let MMFO=String(Math.round(eval("mmfo*0.0032")));
                            
                            this.setState({txt:"",ans:MMFO+"foot",from:"",to:""});
                            break;

                        default:   
                        console.log("inside default case");
                        this.setState({txt:"",ans:"invalid conversion",from:"",to:""});
                    }
            
                }else if(this.state.from==="hrs"){
                    switch(this.state.to){
                        case "mins":
                            console.log("inside m case");
                            let hrmi=(this.state.txt).substr(0,this.state.txt.length-3);
                    
                            let HRMI=String(eval("hrmi*60"));
                    
                            this.setState({txt:"",ans:HRMI+"mins",from:"",to:""});
                            break;
    
                        case "secs":
                            console.log("inside cm case");
                            let hrse=(this.state.txt).substr(0,this.state.txt.length-3);
                            let HRSE=String(eval("hrse*3600"));
                            this.setState({txt:"",ans:HRSE+"secs",from:"",to:""});
                            break;

                        
                        default:   
                        console.log("inside default case");
                        this.setState({txt:"",ans:"invalid conversion",from:"",to:""});
                    }
            
                }else if(this.state.from==="mins"){
                    switch(this.state.to){
                        case "hrs":
                            console.log("inside m case");
                            let mihr=(this.state.txt).substr(0,this.state.txt.length-4);
                            let MIHR=String(eval("mihr*0.017"));
                            this.setState({txt:"",ans:MIHR+"hrs",from:"",to:""});
                            break;
    
                        case "secs":
                            console.log("inside cm case");
                            let mise=(this.state.txt).substr(0,this.state.txt.length-4);
                            let MISE=String(eval("mise*60"));
                            this.setState({txt:"",ans: MISE+"secs",from:"",to:""});
                            break;

                       
                        default:   
                        console.log("inside default case");
                        this.setState({txt:"",ans:"invalid conversion",from:"",to:""});
                    }
            
                }else if(this.state.from==="secs"){
                    switch(this.state.to){
                        case "mins":
                            console.log("inside m case");
                            let semi=(this.state.txt).substr(0,this.state.txt.length-4);
                    
                            let SEMI=String(eval("semi*0.017"));
                    
                            this.setState({txt:"",ans:SEMI+"mins",from:"",to:""});
                            break;
    
                        case "hrs":
                            console.log("inside cm case");
                            let sehr=(this.state.txt).substr(0,this.state.txt.length-4);
                            let SEHR=String(eval("sehr*0.00028"));
                            this.setState({txt:"",ans:SEHR+"hrs",from:"",to:""});
                            break;

                        
                        default:   
                        console.log("inside default case");
                        this.setState({txt:"",ans:"invalid conversion",from:"",to:""});
                    }
            
                }
            }, 300);
            this.setState({ gms:["pink"],
            mgs:["pink"],
            kgs:["pink"],
            secs:["pink"],
            hrs:["pink"],
            mins:["pink"],
            foots:["pink"],
            inchs:["pink"],
            mms:["pink"],
            cms:["pink"],
            kms:["pink"],
            meters:["pink"]});
        }
    }

    onClickHandler=(val)=>{
        if(val==="C"){
            this.setState({txt:"", 
            ans:"",
            from:"",
            to:"",
            gms:["pink"],
            mgs:["pink"],
            kgs:["pink"],
            secs:["pink"],
            hrs:["pink"],
            mins:["pink"],
            foots:["pink"],
            inchs:["pink"],
            mms:["pink"],
            cms:["pink"],
            kms:["pink"],
            meters:["pink"]
        });
            console.log(this.state.txt.length);
        }else if((val==0 || val=="+" || val=="-" || val=="/" || val=="*" || val=="^" || val=="%") && this.state.txt=="" ){

        }else if(val=="." && this.state.txt!==""){
            if(this.state.txt.includes(".")){
                
            }else{
                this.setState({txt:this.state.txt+val, ans:""});
            }
        }
            else{
            this.setState({txt:this.state.txt+val, ans:""});
        }   
        console.log(this.state.txt);
    };
    
    onEvaluate=(props)=>{
        if(this.state.txt.includes("+") || 
        this.state.txt.includes("-") ||
        this.state.txt.includes("*") ||
        this.state.txt.includes("/") ||
        this.state.txt.includes("^") ||
        this.state.txt.includes("%")){
            try{
                let a=eval(this.state.txt);
                this.setState({txt:"",ans:a});

            }catch(err){
                this.setState({txt:"",ans:"Math error"});
            }
        }
       
    }

    onDelete=()=>{
        let len=(this.state.txt).length;
        let b=(this.state.txt).substring(0,len-1);
        this.setState({txt:b,ans:"",from:"",to:""});
    }


    render(){
        let toprint="";
        if(this.state.ans!==""){
            toprint=this.state.ans;
        }else{
            toprint=this.state.txt;
        }
        return(
        <div className="bg">
           <div className="txtbx">{toprint}</div>
          <Table onClickHandler={this.onClickHandler} 
          onDelete={this.onDelete} 
          conversions={this.conversions}
          onEvaluate={this.onEvaluate}
          gms={this.state.gms}
          mgs={this.state.mgs}
          kgs={this.state.kgs}
          foots={this.state.foots}
          inchs={this.state.inchs}
          mms={this.state.mms}
          cms={this.state.cms}
          kms={this.state.kms}
          meters={this.state.meters}
          secs={this.state.secs}
          hrs={this.state.hrs}
          mins={this.state.mins}
          
          />
          
        </div>
    );
    }
}
export default Layout;