from django.shortcuts import render, redirect
from .models import Task

def task_list(request):
    tasks = Task.objects.all().order_by('date', 'time')
    return render(request, 'tasks/index.html', {'tasks': tasks})

def add_task(request):
    if request.method == 'POST':
        Task.objects.create(
            title=request.POST['title'],
            date=request.POST['date'],
            time=request.POST['time'],
            priority=request.POST['priority']
        )
    return redirect('/')

def delete_task(request, task_id):
    Task.objects.filter(id=task_id).delete()
    return redirect('/')
