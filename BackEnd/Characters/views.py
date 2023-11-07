from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from .models import Character
from .serializers import CharacterSerializer
from rest_framework.status import HTTP_201_CREATED,HTTP_400_BAD_REQUEST

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


class AddCharacterView(APIView):
    def post(self, request):
        serializer = CharacterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
