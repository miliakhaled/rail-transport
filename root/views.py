from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required, permission_required

from django.contrib.auth import authenticate, login as log, logout as out
from root.settings import STATIC_URL


# @login_required(login_url='login/')
def index(request):
    return render(request, 'index.html', {
        'STATIC_URL': STATIC_URL
    })


def login(request):
    if request.user.is_authenticated:
        return redirect("/")

    if(request.POST):
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            try:
                log(request, user)
            except:
                return redirect('/login')
            return redirect('/')
        else:
            return render(request, 'login.html', {"message": "informations d'identification non valides, veuillez réessayer"})
    return render(request, 'login.html')
