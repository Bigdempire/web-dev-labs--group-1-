from django.contrib import admin
from .models import MembershipPlan, Trainer, Member, Payment, Attendance

admin.site.register(Member)
admin.site.register(MembershipPlan)
admin.site.register(Trainer)
admin.site.register(Payment)
admin.site.register(Attendance)
