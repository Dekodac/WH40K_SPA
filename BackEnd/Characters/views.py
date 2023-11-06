from rest_framework import generics
from .models import Character
from .serializers import CharacterSerializer

def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip

class CharacterList(generics.ListCreateAPIView):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer

    def list(self, request, *args, **kwargs):
        client_ip = get_client_ip(request)
        print(f"Client IP Address: {client_ip}")
        return super().list(request, *args, **kwargs)

class CharacterDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer

    def retrieve(self, request, *args, **kwargs):
        client_ip = get_client_ip(request)
        print(f"Client IP Address: {client_ip}")
        return super().retrieve(request, *args, **kwargs)
