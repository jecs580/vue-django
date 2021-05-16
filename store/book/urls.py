from rest_framework import routers, urlpatterns

from .viewsets import BookViewSet

router = routers.SimpleRouter()
router.register('books',BookViewSet)

urlpatterns = router.urls