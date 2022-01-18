    document.getElementById("output").textContent="Your answer will appear here!";
    document.getElementById("qqq").textContent="Symptoms will appear here!";
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
        var boalacastigatoare="Not enough data";
        var nrmin=0;
        for(let i=0;i<boli.length;i++)
        {
            if(boli[i].scor>nrmin && boli[i].scor!=0)
            {
                nrmin=boli[i].scor;
                boalacastigatoare=boli[i].nume;
            }
        }
        if(boalacastigatoare=="Not enough data")
        {
            document.getElementById("output").textContent=boalacastigatoare;
        }
        else
        {
            document.getElementById("output").textContent="You probably have " + boalacastigatoare+" "+nrmin;
        }
        for(let i=0;i<boli.length;i++)
        {
            boli[i].scor=0;
        }
    }