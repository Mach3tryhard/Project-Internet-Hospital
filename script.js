    //document.getElementById("qqq").textContent="Symptoms will appear here!";
    var boli=[{
        nume:'Pharyngitis', simptome:['stranut','durere','tuse','oboseala'], parte:['gat'], scor:0
    },
    {
        nume:'Laryngitis', simptome:['raguseala','gadilat','durere','tuse'], parte:['gat'], scor:0
    },
    {
        nume:'Tonsillitis', simptome:['durere','febra','raguseala','gadilat'], parte:['gat'], scor:0
    }]
    var parteselectata;
    //Functia pentru calculat boala cea mai probabila---------------------------------------------------------------------------------------------------
    function FunctieCalculatBoala()
    {
        for(let i=0;i<boli.length;i++)
        {
            if(boli[i].parte==parteselectata)
            {
                for(let j=0;j<boli[i].simptome.length;j++)
                {
                    for (let input of document.querySelectorAll("#gat input"))
                    {
                        if(boli[i].simptome[j]==input.name && input.checked==true){
                            boli[i].scor += boli[i].simptome.length-j;
                        }
                    }
                }
            }
            document.getElementById(boli[i].parte)
        }
        var boalacastigatoare="Not enough data";var boalacastigatoare1="Not enough data";var boalacastigatoare2="Not enough data";
        var nrmin=0;var nrmin1=0;var nrmin2=0;
        for(let i=0;i<boli.length;i++)
        {
            if(boli[i].scor>nrmin)
            {
                nrmin2=nrmin1;
                boalacastigatoare2=boalacastigatoare1;
                nrmin1=nrmin;
                boalacastigatoare1=boalacastigatoare;
                nrmin=boli[i].scor;
                boalacastigatoare=boli[i].nume;
            }
            else
            if(boli[i].scor>nrmin1)
            {
                nrmin2=nrmin1;
                boalacastigatoare2=boalacastigatoare1;
                nrmin1=boli[i].scor;
                boalacastigatoare1=boli[i].nume;;
            }
            else
            if(boli[i].scor>nrmin2)
            {
                nrmin2=boli[i].scor;
                boalacastigatoare2=boli[i].nume;
            }
        }
        var reznrmin=100/(nrmin+nrmin1+nrmin2)*nrmin;
        reznrmin=Math.round(reznrmin*10)/10;
        var reznrmin1=100/(nrmin+nrmin1+nrmin2)*nrmin1;
        reznrmin1=Math.round(reznrmin1*10)/10;
        var reznrmin2=100/(nrmin+nrmin1+nrmin2)*nrmin2;
        reznrmin2=Math.round(reznrmin2*10)/10;
        if(boalacastigatoare=="Not enough data")
        {
            document.getElementById("output").textContent=boalacastigatoare;
        }
        else
        {
            document.getElementById("output").textContent="Top problems you might have by persentage:"+boalacastigatoare+" "+reznrmin+"%"+' '+boalacastigatoare1+" "+reznrmin1+"%"+' '+boalacastigatoare2+" "+reznrmin2+"%";
        }
        for(let i=0;i<boli.length;i++)
        {
            boli[i].scor=0;
        }
    }