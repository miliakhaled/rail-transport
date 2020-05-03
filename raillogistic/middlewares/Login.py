# from django.contrib.auth import mixins
# from rest_framework.authentication import SessionAuthentication
# from rest_framework.authentication import TokenAuthentication
# from rest_framework import generics

# class TokenLoginRequiredMixin(mixins.LoginRequiredMixin):

#     """A login required mixin that allows token authentication."""

#     def dispatch(self, request, *args, **kwargs):
#         """If token was provided, ignore authenticated status."""
#         http_auth = request.META.get("HTTP_AUTHORIZATION")
#         print(request)

#         if http_auth and "JWT" in http_auth:
#             pass

#         elif not request.user.is_authenticated:
#             return self.handle_no_permission()

#         return super(mixins.LoginRequiredMixin, self).dispatch(
#             request, *args, **kwargs)

# class ListAPIView(TokenLoginRequiredMixin, generics.ListAPIView):

#     """This view suppot both token and session authentication."""

#     authentication_classes = [
#         SessionAuthentication,
#         TokenAuthentication,
#         ]
