rnd=025
grp=az400-foodapp
appPlan=foodplan-$rnd
app=foodapi-$rnd
loc=westeurope

az group create -n $grp -l $loc

# If FREE is not possiple take F1
az appservice plan create -n $appPlan -g $grp --sku FREE --is-linux

az webapp create -n $app -g $grp --plan $appPlan --runtime "DOTNET|5.0"