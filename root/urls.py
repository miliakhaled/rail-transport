"""Transport URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from graphene_django.views import GraphQLView
from .schema import schema
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.mixins import LoginRequiredMixin
from . import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns


class PrivateGraphQLView(LoginRequiredMixin, GraphQLView):
    login_url = "/login"
    pass


urlpatterns = [
    path('admin/', admin.site.urls),
    url('^login', csrf_exempt(views.login), name="login"),
    url('^graphiql', csrf_exempt(PrivateGraphQLView.as_view(
        graphiql=True, schema=schema))),
    path('gql', csrf_exempt(GraphQLView.as_view(batch=True))),
    url(r'^(?:.*)/?$', views.index),
    # path('', views.index),
]
# urlpatterns += staticfiles_urlpatterns()
