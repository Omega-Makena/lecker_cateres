from django.shortcuts import render

def home(request):
    return render(request, 'core/index.html')

def catering(request):
    return render(request, 'core/catering.html')

def decoration(request):
    return render(request, 'core/decoration.html')

def juice_hubs(request):
    return render(request, 'core/juice_hubs.html')
